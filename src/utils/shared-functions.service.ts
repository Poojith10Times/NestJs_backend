import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { FilterType } from "@prisma/client";
import { FilterDataDto, ResponseDataDto } from "src/elastic-search/dto/event-data.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Request } from "express";
import { PaginationDto, sortFieldMap } from "src/elastic-search/dto/pagination.dto";
import { retryWithFaultHandling } from "src/fault-tolerance";

@Injectable()
export class SharedFunctionsService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {}

    async quotaAndFilterVerification(user_id: string, api_id: string) {
        return await retryWithFaultHandling(async () => await this.prismaService.$transaction(async (tx) => {
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
        }), { service: 'postgres' });
    }

    async queryBuilder(fields: FilterDataDto): Promise<any[]> {
        const must: any[] = [];

        // add multi search query
        const addMultiSearch = (q?: string) => {
            // TODO: add punchline to mutisearch query
            if(q != undefined){
                must.push({
                    multi_match: {
                        query: q,
                        fields: ['event_name^3', 'event_description^2', 'event_categoryName', 'event_abbrName'],
                        type: 'best_fields',
                        minimum_should_match: '75%',
                        tie_breaker: 0.3,
                        fuzziness: 'AUTO',
                    }
                })
            }
        }

        // add match or terms filter
        const addMatchOrTerms = (field: string, value?: string | string[]) => {
            if(value != undefined){
                if(Array.isArray(value)){
                    must.push({
                        bool: {
                            should: value.map(val => ({
                                match_phrase: {
                                    [field]: {
                                        query: val,
                                    }
                                }
                            }))
                        }
                    })
                }else{
                    must.push({ match: { [field]: value } });
                }
            }
        }

        // add range filter
        const addRange = (field: string, gte?: string | number, lte?: string | number, gt?: string | number, lt?: string | number) => {
            const range: any = {};
            if(gte != undefined) range.gte = gte;
            if(lte != undefined) range.lte = lte;
            if(gt != undefined) range.gt = gt;
            if(lt != undefined) range.lt = lt;
            if(Object.keys(range).length > 0){
                must.push({ range: { [field]: range } });
            }
        }

        // active filter
        const addActiveFilter = (activeGte?: string, activeLte?: string, activeGt?: string, activeLt?: string) => {
            const activeFilter: any[] = [];

            // events that end on/after specified date
            if (activeGte) activeFilter.push({ range: { "event_endDate": { gte: activeGte } } });
            if (activeGt) activeFilter.push({ range: { "event_endDate": { gt: activeGt } } });

            // events that start on/before specified date
            if (activeLte) activeFilter.push({ range: { "event_startDate": { lte: activeLte } } });
            if (activeLt) activeFilter.push({ range: { "event_startDate": { lt: activeLt } } });

            if (activeFilter.length > 0) {
                must.push({
                    bool: {
                        must: activeFilter
                    }
                })
            }
        }

        addMatchOrTerms('event_categoryName', fields.category);
        addMatchOrTerms('event_cityName', fields.city);
        addMatchOrTerms('event_countryName', fields.country);
        addMatchOrTerms('event_pricing', fields.price);
        addMatchOrTerms('event_type', fields.type);
        addMatchOrTerms('event_cityState', fields.state);
        addMatchOrTerms('event_tagName', fields.tags);
        addMatchOrTerms('event_venueName', fields.venue);
        addMatchOrTerms('event_companyName', fields.company);

        addRange('event_startDate', fields['start.gte'], fields['start.lte'], fields['start.gt'], fields['start.lt']);
        addRange('event_endDate', fields['end.gte'], fields['end.lte'], fields['end.gt'], fields['end.lt']);
        addRange('event_avgRating', fields.avgRating, undefined);
        addRange('event_following', fields['following.gte'], fields['following.lte'], fields['following.gt'], fields['following.lt']);
        addRange('event_speakers', fields['speaker.gte'], fields['speaker.lte'], fields['speaker.gt'], fields['speaker.lt']);
        addRange('event_exhibitors', fields['exhibitors.gte'], fields['exhibitors.lte'], fields['exhibitors.gt'], fields['exhibitors.lt']);
        addRange('event_editionsCount', fields['editions.gte'], fields['editions.lte'], fields['editions.gt'], fields['editions.lt']);

        addActiveFilter(
            fields['active.gte'], 
            fields['active.lte'], 
            fields['active.gt'], 
            fields['active.lt']
        );

        if (fields['user.designation'] && fields['user.designation'].length > 0) {
            must.push({
                has_child: {
                    type: "user",
                    query: {
                        bool: {
                            must: [
                                {
                                    terms: {
                                        "user_designationName": fields['user.designation']
                                    }
                                }
                            ]
                        }
                    }
                }
            })
        }

        // add multi search
        addMultiSearch(fields.q);

        // bulding within filter
        if(fields.lat && fields.lon){
            if(fields.lat && fields.lon && fields.radius && fields.unit){
                must.push({
                    geo_distance: { 
                        distance: `${fields.radius}${fields.unit}`,
                        event_geoLocation: {
                            lat: parseFloat(fields.lat),
                            lon: parseFloat(fields.lon)
                        }
                    }
                })
            }
        }


        must.push({ match: { "event_published": "1" } });
        return must;
    }

    async saveAndUpdateApiData(user_id: string, api_id: string, endpoint: string, apiResponseTime: number, ip_address: string, statusCode: number, filterFields: FilterDataDto, responseFields: ResponseDataDto, pagination: PaginationDto, errorMessage: any) {
        try{
            await retryWithFaultHandling(async () => await this.prismaService.$transaction(async (tx) => {
                await tx.apiUsageLog.create({
                    data: {
                        user_id,
                        api_id,
                        endpoint,
                        error_message: errorMessage,
                        payload: {
                            filterFields: filterFields as any,
                            responseFields: responseFields as any,
                            pagination: pagination as any,
                        },
                        ip_address,
                        status_code: statusCode,
                        api_response_time: apiResponseTime,
                    }
                })
            }), { service: 'postgres' });
        }catch(error: any){
            await retryWithFaultHandling(async () => await this.prismaService.$transaction(async (tx) => {
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
            }), { service: 'postgres' });
            throw error;
        }
    }

    async getPaginationURL(limit: string, offset: string, type: 'next' | 'previous', req: Request){
        const baseUrl = `${req.protocol}://${req.get('host')}${req.path}`;
        const limitNum = parseInt(limit);
        const offsetNum = parseInt(offset);
        let newOffset = type === 'next' ? offsetNum + limitNum : offsetNum - limitNum;
        if(newOffset < 0) return null;
        return `${baseUrl}?limit=${limitNum}&offset=${newOffset}`;
    }

    async responseNameChange(eventData: any) {
        return eventData.map((item: any) => this.renameEventKeys(item._source));
    }

    renameEventKeys(event: any) {
        return {
            type: event.event_type,
            start: event.event_startDate,
            end: event.event_endDate,
            name: event.event_name,
            city: event.event_cityName,
            country: event.event_countryName,
            tags: event.event_tagName,
            description: event.event_description,
            logo: event.event_logo,
            category: event.event_categoryName,
            avgRating: event.event_avgRating,
            id: event.event_id,
            following: event.event_following,
            state: event.event_cityState,
            created: event.event_created,
            exhibitors: event.event_exhibitors,
            published: event.event_published,
        }
    }

    async parseSortFields( sort: string | undefined, fields: FilterDataDto) {
        if (!sort && !fields.q) return [
            { _id: { order: "asc" , missing: "_last" } }
        ];

        // when there is a search query and no sort is provided, sort by score and start date
        if(fields.q && !sort){
            return [
                {
                    _score: {
                        order: "desc",
                    },
                    event_startDate: {
                        order: "desc",
                        missing: "_last"
                    }
                }
            ]
        }

        return sort?.split(",").map((field) => {
            const cleanField = field.startsWith("-") ? field.slice(1) : field;
            return {
                [sortFieldMap[cleanField]]: {
                    order: field.startsWith("-") ? "desc" : "asc",
                    missing: "_last"
                }
            }
        })
    }
}