import { BadRequestException, Injectable } from "@nestjs/common";
import { CategoryDateDto } from "src/elastic-search/dto/category-date.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SharedFunctionsService {
    constructor(private readonly prismaService: PrismaService) {}

    async queryBuilder(fields: CategoryDateDto): Promise<any[]> {

        const must: any[] = [];

        if (fields.category) { 
            must.push({ match: { event_categoryName: fields.category } });
        }

        if (fields.startDate_gte || fields.startDate_lte) { 
            const range: any = {};
            if (fields.startDate_gte) range.gte = fields.startDate_gte;
            if (fields.startDate_lte) range.lte = fields.startDate_lte;
            must.push({ range: { event_startDate: range } });
        }

        if (fields.endDate_gte || fields.endDate_lte) { 
            const range: any = {};
            if (fields.endDate_gte) range.gte = fields.endDate_gte;
            if (fields.endDate_lte) range.lte = fields.endDate_lte;
            must.push({ range: { event_endDate: range } });
        }

        if (fields.createdAt_gte || fields.createdAt_lte) { 
            const range: any = {};
            if (fields.createdAt_gte) range.gte = fields.createdAt_gte;
            if (fields.createdAt_lte) range.lte = fields.createdAt_lte;
            must.push({ range: { event_created: range } });
        }

        if (fields.event_id) {
            must.push({ match: { event_id: fields.event_id } });
        }

        if (fields.impactScore_gte || fields.impactScore_lte) { 
            const range: any = {};
            if (fields.impactScore_gte) range.gte = fields.impactScore_gte;
            if (fields.impactScore_lte) range.lte = fields.impactScore_lte;
            must.push({ range: { event_impactScore: range } });
        }

        if(fields.event_status) {
            must.push({ match: { event_status: fields.event_status } });
        }

        if(fields.event_type) {
            must.push({ match: { event_type: fields.event_type } });
        }

        if(fields.event_frequency) {
            must.push({ match: { event_frequency: fields.event_frequency } });
        }

        if (fields.designation) {
            must.push({ match: { user_designationName: fields.designation } });
        }

        if (fields.inboundScore_gte || fields.inboundScore_lte) { 
            const range: any = {};
            if (fields.inboundScore_gte) range.gte = fields.inboundScore_gte;
            if (fields.inboundScore_lte) range.lte = fields.inboundScore_lte;
            must.push({ range: { event_inboundScore: range } });
        }

        if (fields.internationalScore_gte || fields.internationalScore_lte) {
            const range: any = {};
            if (fields.internationalScore_gte) range.gte = fields.internationalScore_gte;
            if (fields.internationalScore_lte) range.lte = fields.internationalScore_lte;
            must.push({ range: { event_internationalScore: range } });
        }

        if (fields.editions_gte || fields.editions_lte) { 
            const range: any = {};
            if (fields.editions_gte) range.gte = fields.editions_gte;
            if (fields.editions_lte) range.lte = fields.editions_lte;
            must.push({ range: { event_editionsCount: range } });
        }

        return must;
    }

    async saveApiData(user_id: string, api_id: string, endpoint: string, apiResponseTime: number, ip_address: string, statusCode: number, payload: any = {}) {
        try{
            await this.prismaService.apiUsageLog.create({
                data: {
                    user_id,
                    api_id,
                    endpoint,
                    payload,
                    ip_address,
                    status_code: statusCode,
                    api_response_time: apiResponseTime,
                }
            })
        }catch(error: any){
            if(error.code === 'P2002'){
                throw new BadRequestException('Duplicate entry');
            }else{
                throw error;
            }
        }
    }
}