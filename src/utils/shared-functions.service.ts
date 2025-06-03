import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { FilterType } from "@prisma/client";
import { FilterDataDto, ResponseDataDto } from "src/elastic-search/dto/event-data.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SharedFunctionsService {
    constructor(private readonly prismaService: PrismaService) {}

    async quotaAndFilterVerification(user_id: string, api_id: string) {
        return await this.prismaService.$transaction(async (tx) => {
            // Quota verification and decrement
            const updated = await tx.userApiAccess.updateMany({
                where: {
                    user_id,
                    api_id,
                    daily_limit: {
                        gt: 0,
                    }
                },
                data: {
                    daily_limit: {
                        decrement: 1,
                    }
                }
            })

            if(updated.count === 0) throw new HttpException('Daily limit reached', HttpStatus.TOO_MANY_REQUESTS);
      
            // get permitted filters
            const userFilterAccess = await tx.userFilterAccess.findMany({
                where: {
                user_id,
                has_access: true,
                filter: {
                    api_id,
                    is_active: true,
                },
                },
                include: {
                filter: {
                    select: {
                    filter_type: true,
                    filter_name: true,
                    is_paid: true,
                    },
                },
                },
            });
        
            const allowedFilters = userFilterAccess
                .filter((access) => {
                const filter = access.filter;
                if (filter.filter_type === FilterType.BASIC) return true;
                if (filter.filter_type === FilterType.ADVANCED && !filter.is_paid) return true;
                return false;
                })
                .map((access) => access.filter.filter_name);
        
            return allowedFilters;
        });
    }

    async queryBuilder(fields: FilterDataDto): Promise<any[]> {

        const must: any[] = [];

        // DRY
        const addMatch = (field: string, value?: string) => {
            if(value != undefined){
                must.push({ match: { [field]: value } });
            }
        }

        const addRange = (field: string, gte?: string | number, lte?: string | number) => {
            const range: any = {};
            if(gte != undefined) range.gte = gte;
            if(lte != undefined) range.lte = lte;
            if(Object.keys(range).length > 0){
                must.push({ range: { [field]: range } });
            }
        }

        addMatch('event_categoryName', fields.category);
        // addMatch('event_id', fields.event_id);
        addMatch('event_status', fields.event_status);
        addMatch('event_type', fields.event_type);
        addMatch('user_designationName', fields.designation);
        addMatch('event_frequency', fields.event_frequency);

        addRange('event_startDate', fields.startDate_gte, fields.startDate_lte);
        addRange('event_endDate', fields.endDate_gte, fields.endDate_lte);
        addRange('event_created', fields.createdAt_gte, fields.createdAt_lte);
        addRange('event_impactScore', fields.impactScore_gte, fields.impactScore_lte);
        addRange('event_inboundScore', fields.inboundScore_gte, fields.inboundScore_lte);
        addRange('event_internationalScore', fields.internationalScore_gte, fields.internationalScore_lte);
        addRange('event_editionsCount', fields.editions_gte, fields.editions_lte);

        return must;
    }

    async saveAndUpdateApiData(user_id: string, api_id: string, endpoint: string, apiResponseTime: number, ip_address: string, statusCode: number, filterFields: FilterDataDto, responseFields: ResponseDataDto, errorMessage: any) {
        try{
            await this.prismaService.$transaction(async (tx) => {
                await tx.apiUsageLog.create({
                    data: {
                        user_id,
                        api_id,
                        endpoint,
                        error_message: errorMessage,
                        payload: {
                            filterFields: filterFields as any,
                            responseFields: responseFields as any,
                        },
                        ip_address,
                        status_code: statusCode,
                        api_response_time: apiResponseTime,
                    }
                })
            })
        }catch(error: any){
            await this.prismaService.$transaction(async (tx) => {
                await tx.userApiAccess.update({
                    where: {
                        user_id_api_id: {
                            user_id,
                            api_id,
                        }
                    },
                    data: {
                        daily_limit: {
                            increment: 1,
                        }
                    }
                })
            })
            throw error;
        }
    }
}