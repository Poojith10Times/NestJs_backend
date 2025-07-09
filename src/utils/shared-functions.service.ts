import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { FilterType } from "@prisma/client";
import { FilterDataDto, ResponseDataDto } from "src/elastic-search/dto/event-data.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Request } from "express";
import { PaginationDto, sortFieldMap } from "src/elastic-search/dto/pagination.dto";
import { retryWithFaultHandling } from "src/fault-tolerance";
import * as qs from "qs";

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


    async getDefaultAggregations(filterFields: FilterDataDto){
        return {
            doc_by_country: {
                terms: {
                    field: 'event_countryName',
                    min_doc_count: 1,
                    size: 500,
                    order: {
                        _count: 'desc',
                    }
                }
            },
            doc_by_city: {
                terms: {
                    field: 'event_cityName',
                    min_doc_count: 1,
                    size: 10000,
                    order: {
                        _count: 'desc',
                    }
                }
            },
            doc_by_category: {
                terms: {
                    field: 'event_categoryName.keyword',
                    min_doc_count: 1,
                    size: 1000,
                    order: {
                        _count: 'desc',
                    }
                }
            },
            doc_by_tags: {
                terms: {
                    field: 'event_tagName.keyword',
                    min_doc_count: 1,
                    size: 1000,
                    order: {
                        _count: 'desc',
                    }
                }
            },
            // query for Testing Index
            doc_by_month: {
                date_histogram: {
                    field: 'event_startDate',
                    calendar_interval: 'month',
                    format: 'yyyy-MM-dd',
                    min_doc_count: 0,
                    order: {
                        _count: 'desc',
                    }
                }
            }
        }
    }

    // async buildBaseQuery(filterFields: FilterDataDto){
    //     const must: any[] = [];
    //     must.push({ term: { "event_published": "1" } });

    //     if(filterFields.category) this.addMatchOrTerms(must, 'event_categoryName', filterFields.category);
    //     if(filterFields.country) this.addMatchOrTerms(must, 'event_countryName', filterFields.country);
    //     if(filterFields.city) this.addMatchOrTerms(must, 'event_cityName', filterFields.city);
    //     if(filterFields.type) this.addMatchOrTerms(must, 'event_type', filterFields.type);
    //     if(filterFields.products) this.addMatchOrTerms(must, 'event_tagName.keyword', filterFields.products);

    //     return { bool: { must, } }
    // }

    async buildBaseQuery(filterFields: FilterDataDto){
        const must: any[] = [];
        const filter: any[] = [];
        must.push({ term: { "event_published": "1" } });

        if(filterFields.category) this.addMatchOrTerms(filter, 'event_categoryName', filterFields.category);
        if(filterFields.country) this.addMatchOrTerms(filter, 'event_countryName', filterFields.country);
        if(filterFields.city) this.addMatchOrTerms(filter, 'event_cityName', filterFields.city);
        if(filterFields.type) this.addMatchOrTerms(filter, 'event_type', filterFields.type);
        if(filterFields.products) this.addMatchOrTerms(filter, 'event_tagName.keyword', filterFields.products);

        return { bool: { must, filter} }
    }


    async buildAggregationQuery(filterFields: FilterDataDto, pagination: PaginationDto){
        const aggregations: any = {};
        
        aggregations.doc_by_country = {
            terms: {
                field: 'event_countryName',
                size: 10000,
                order: {
                    _count: 'desc',
                },
                execution_hint: 'global_ordinals',
                collect_mode: "breadth_first",
            },
            aggs: {
                bucket_truncate: {
                    bucket_sort: {
                        size: pagination.limit,
                        from: pagination.offset
                    }
                }
            }
        };
    
        aggregations.doc_by_city = {
            terms: {
                field: 'event_cityName',
                size: 10000,
                order: {
                    _count: 'desc',
                },
                execution_hint: 'global_ordinals',
                collect_mode: "breadth_first",
            },
            aggs: {
                bucket_truncate: {
                    bucket_sort: {
                        size: pagination.limit,
                        from: pagination.offset
                    }
                }
            }
        };
    
        aggregations.doc_by_category = {
            terms: {
                field: 'event_categoryName.keyword',
                size: 10000,
                order: {
                    _count: 'desc',
                },
                execution_hint: 'global_ordinals',
                collect_mode: "breadth_first",
            },
            aggs: {
                bucket_truncate: {
                    bucket_sort: {
                        size: pagination.limit,
                        from: pagination.offset
                    }
                }
            }
        };
    
        aggregations.doc_by_tags = {
            terms: {
                field: 'event_tagName.keyword',
                size: 10000,
                order: {
                    _count: 'desc',
                },
                execution_hint: 'global_ordinals',
                collect_mode: "breadth_first",
            },
            aggs: {
                bucket_truncate: {
                    bucket_sort: {
                        size: pagination.limit,
                        from: pagination.offset
                    }
                }
            }
        }

        aggregations.doc_by_month = {
            date_histogram: {
                field: 'event_startDate',
                calendar_interval: 'month',
                format: 'yyyy-MM-dd',
                min_doc_count: 1,
                // order: {
                //     _count: 'desc',
                // }
            },
        }

        return aggregations;
    }


    async determineQueryType(filterFields: FilterDataDto){
        const nonFilterKeys = new Set(['view', 'radius', 'unit', 'isBranded']);  //these keys do not count as actual filters
        const hasActualFilters = Object.keys(filterFields).some(key => filterFields[key as keyof FilterDataDto] !== undefined && !nonFilterKeys.has(key));  //check if any actual filters are present
        const isAggregationView = filterFields.view === 'agg';

        if (!hasActualFilters && !isAggregationView) { return 'DEFAULT_LIST'; }  //no actual filters and not aggregation view
        else if (!hasActualFilters && isAggregationView) { return 'DEFAULT_AGGREGATION'; } // no actual filters but aggregation view in request
        else if (hasActualFilters && !isAggregationView) { return 'FILTERED_LIST'; } // actual filters and no aggregation view
        else if (hasActualFilters && isAggregationView) { return 'FILTERED_AGGREGATION'; } // actual filters and aggregation view in request
    }

    async buildListViewResponse(eventData: any, pagination: PaginationDto, req: Request) {
        const responseNameChange = await this.responseNameChange(eventData?.body?.hits?.hits);
        return {
            count: eventData?.body?.hits?.hits.length,
            next: await this.getPaginationURL(pagination?.limit.toString(), pagination?.offset.toString(), 'next', req),
            previous: await this.getPaginationURL(pagination?.limit.toString(), pagination?.offset.toString(), 'previous', req),
            data: responseNameChange
        }
    }

    async buildAggregationViewResponse(eventData: any, pagination: PaginationDto, req: Request, filterFields: FilterDataDto) {
        const afterKey = eventData?.body?.aggregations?.doc_by_country_city?.after_key;
        const queryType = await this.determineQueryType(filterFields);
        if(queryType === 'DEFAULT_AGGREGATION') {
            return {
                count: eventData.body.hits,
                next: await this.getAdvPaginationURL(req, afterKey),
                results: eventData.body.aggregations,
            };
        }
        return {
            count: eventData.body.hits,
            next: await this.getPaginationURL(pagination?.limit.toString(), pagination?.offset.toString(), 'next', req),
            results: eventData.body.aggregations,
        };
    }

    private addMatchOrTerms = (must: any[], field: string, value?: string | string[]) => {
        // if (value === 'ALL') {
        //     must.push({ match_all: {} }); 
        //     return;
        // }
        if (value != undefined) {
            const isKeyword = field.includes(".keyword");
    
            if (Array.isArray(value)) {
                if (isKeyword) {
                    must.push({
                        terms: {
                            [field]: value
                        }
                    });
                } else {
                    must.push({
                        bool: {
                            should: value.map(val => ({
                                match_phrase: {
                                    [field]: {
                                        query: val,
                                    }
                                }
                            })),
                            minimum_should_match: 1
                        }
                    });
                }
            } else {
                if (isKeyword) {
                    must.push({
                        term: {
                            [field]: value
                        }
                    });
                } else {
                    must.push({
                        match_phrase: {
                            [field]: {
                                query: value
                            }
                        }
                    });
                }
            }
        }
    };

    private addRange = (must: any[], field: string, gte?: string | number, lte?: string | number, gt?: string | number, lt?: string | number) => {
        const range: any = {};
        if(gte != undefined) range.gte = gte;
        if(lte != undefined) range.lte = lte;
        if(gt != undefined) range.gt = gt;
        if(lt != undefined) range.lt = lt;
        if(Object.keys(range).length > 0){
            must.push({ range: { [field]: range } });
        }
    }

    // async queryBuilder(fields: FilterDataDto): Promise<{must: any[], mustNot: any[]}> {
    //     const must: any[] = [];
    //     const mustNot: any[] = [];

    //     // add multi search query
    //     const addMultiSearch = (q?: string | { include?: string[], exclude?: string[] }) => {
    //         // TODO: add punchline to mutisearch query
    //         if(!q) return;

    //         if (typeof q === 'string') {
    //             // fuzziness is used in normal search query
    //             must.push({
    //                 multi_match: {
    //                   query: q,
    //                   fields: ['event_name^4', 'event_description^3', 'event_categoryName^2', 'event_abbrName'],
    //                   type: 'best_fields',
    //                   minimum_should_match: '75%',
    //                   tie_breaker: 0.4,
    //                   fuzziness: 'AUTO',
    //                 }
    //               });
    //         }else{
    //             // fuzziness is not used in multi search query
    //             const multiMatchQuery = (keyword: string) => ({
    //                 multi_match: {
    //                     query: keyword,
    //                     fields: ['event_name^4', 'event_description^3', 'event_categoryName^2', 'event_abbrName'],
    //                     type: 'best_fields',
    //                     minimum_should_match: '100%',
    //                     tie_breaker: 0.4,
    //                 }
    //             });
    //             if(typeof q === 'object') {
    //                 if(q.include && q.include.length > 0) q.include.forEach(keyword => must.push(multiMatchQuery(keyword)));
    //                 if(q.exclude && q.exclude.length > 0) q.exclude.forEach(keyword => mustNot.push(multiMatchQuery(keyword)));
    //             }
    //         }
    //     }

    //     // active filter
    //     const addActiveFilter = (activeGte?: string, activeLte?: string, activeGt?: string, activeLt?: string) => {
    //         const activeFilter: any[] = [];

    //         // events that end on/after specified date
    //         if (activeGte) activeFilter.push({ range: { "event_endDate": { gte: activeGte } } });
    //         if (activeGt) activeFilter.push({ range: { "event_endDate": { gt: activeGt } } });

    //         // events that start on/before specified date
    //         if (activeLte) activeFilter.push({ range: { "event_startDate": { lte: activeLte } } });
    //         if (activeLt) activeFilter.push({ range: { "event_startDate": { lt: activeLt } } });

    //         if (activeFilter.length > 0) {
    //             must.push({
    //                 bool: {
    //                     must: activeFilter
    //                 }
    //             })
    //         }
    //     }

    //     this.addMatchOrTerms(must, 'event_categoryName', fields.category);
    //     this.addMatchOrTerms(must, 'event_cityName', fields.city);
    //     this.addMatchOrTerms(must, 'event_countryName', fields.country);
    //     this.addMatchOrTerms(must, 'event_pricing', fields.price);
    //     this.addMatchOrTerms(must, 'event_type', fields.type);
    //     this.addMatchOrTerms(must, 'event_cityState', fields.state);
    //     this.addMatchOrTerms(must, 'event_tagName.keyword', fields.products);
    //     this.addMatchOrTerms(must, 'event_venueName', fields.venue);
    //     this.addMatchOrTerms(must, 'event_companyName', fields.company);
    //     this.addMatchOrTerms(must, 'event_frequency', fields.frequency);
    //     this.addMatchOrTerms(must, 'event_functionality', fields.visibility);
    //     this.addMatchOrTerms(must, 'event_estimatedTag', fields.estimatedVisitors);

    //     this.addRange(must, 'event_startDate', fields['start.gte'], fields['start.lte'], fields['start.gt'], fields['start.lt']);
    //     this.addRange(must, 'event_endDate', fields['end.gte'], fields['end.lte'], fields['end.gt'], fields['end.lt']);
    //     this.addRange(must, 'event_avgRating', fields.avgRating, undefined);
    //     this.addRange(must, 'event_following', fields['following.gte'], fields['following.lte'], fields['following.gt'], fields['following.lt']);
    //     this.addRange(must, 'event_speakers', fields['speaker.gte'], fields['speaker.lte'], fields['speaker.gt'], fields['speaker.lt']);
    //     this.addRange(must, 'event_exhibitors', fields['exhibitors.gte'], fields['exhibitors.lte'], fields['exhibitors.gt'], fields['exhibitors.lt']);
    //     this.addRange(must, 'event_editionsCount', fields['editions.gte'], fields['editions.lte'], fields['editions.gt'], fields['editions.lt']);

    //     // add active filter
    //     addActiveFilter( fields['active.gte'], fields['active.lte'], fields['active.gt'], fields['active.lt'] );

    //     if (fields['user.designation'] && fields['user.designation'].length > 0) {
    //         must.push({ has_child: { type: "user", query: { bool: { must: [ { terms: { "user_designationName": fields['user.designation'] } } ] } } }});
    //     }

    //     // check if event is hybrid, physical or online
    //     if(fields.mode !== undefined) {
    //         const hybridConditions: any[] = [];
    //         // event is hybrid
    //         if(fields.mode.includes('hybrid')) hybridConditions.push({match: { "event_hybrid": "1" } });
    //         // event is online
    //         if(fields.mode.includes('online')) hybridConditions.push({ match: {"event_cityId": "1"} });
    //         // event is physical and not online
    //         if(fields.mode.includes('physical')) hybridConditions.push({ bool: { must_not: { match: {"event_cityId": "1"} }, must: { match: {"event_hybrid": "0"} }}});

    //         if (hybridConditions.length === 1) {
    //             // if only one condition, push it directly
    //             must.push(hybridConditions[0]);
    //         }else if (hybridConditions.length > 1) { 
    //             // if multiple conditions, use 'should' (OR logic)
    //             must.push({bool: { should: hybridConditions, }});
    //         }
    //     }

    //     // check the maturity of the event
    //     if(fields.maturity !== undefined) {
    //         if(fields.maturity === 'new') this.addRange(must, 'event_editionsCount', 1, 1, undefined, undefined);   // new event
    //         else if(fields.maturity === 'growing') this.addRange(must, 'event_editionsCount', 2, 3, undefined, undefined); // growing event
    //         else if(fields.maturity === 'established') this.addRange(must, 'event_editionsCount', 4, 8, undefined, undefined); // established event
    //         else this.addRange(must, 'event_editionsCount', 9, undefined, undefined, undefined); // flagship event
    //     }

    //     // check if event is branded ( TODO: add logic to check if event is series event or not)
    //     if(fields.isBranded === true) must.push({exists: { field: "event_brandId" }});

    //     // add multi search
    //     addMultiSearch(fields.q);
    //     addMultiSearch(fields.keywords);

    //     // bulding within filter
    //     if(fields.lat && fields.lon){
    //         if(fields.lat && fields.lon && fields.radius && fields.unit){
    //             must.push({ 
    //                 geo_distance: {  distance: `${fields.radius}${fields.unit}`, 
    //                 event_geoLocation: { lat: parseFloat(fields.lat), lon: parseFloat(fields.lon) } }
    //             }) 
    //         }
    //     }

    //     must.push({ term: { "event_published": "1" } });
    //     return {must, mustNot};
    // }


    async queryBuilder(fields: FilterDataDto): Promise<{must: any[], mustNot: any[], filter: any[]}> {
        const must: any[] = [];
        const mustNot: any[] = [];
        const filter: any[] = [];

        // add multi search query
        const addMultiSearch = (q?: string | { include?: string[], exclude?: string[] }) => {
            // TODO: add punchline to mutisearch query
            if(!q) return;

            if (typeof q === 'string') {
                // fuzziness is used in normal search query
                must.push({
                    multi_match: {
                      query: q,
                      fields: ['event_name^4', 'event_description^3', 'event_categoryName^2', 'event_abbrName'],
                      type: 'best_fields',
                      minimum_should_match: '75%',
                      tie_breaker: 0.4,
                      fuzziness: 'AUTO',
                    }
                  });
            }else{
                // fuzziness is not used in multi search query
                const multiMatchQuery = (keyword: string) => ({
                    multi_match: {
                        query: keyword,
                        fields: ['event_name^4', 'event_description^3', 'event_categoryName^2', 'event_abbrName'],
                        type: 'best_fields',
                        minimum_should_match: '100%',
                        tie_breaker: 0.4,
                    }
                });
                if(typeof q === 'object') {
                    if(q.include && q.include.length > 0) q.include.forEach(keyword => must.push(multiMatchQuery(keyword)));
                    if(q.exclude && q.exclude.length > 0) q.exclude.forEach(keyword => mustNot.push(multiMatchQuery(keyword)));
                }
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

        this.addMatchOrTerms(filter, 'event_categoryName', fields.category);
        this.addMatchOrTerms(filter, 'event_cityName', fields.city);
        this.addMatchOrTerms(filter, 'event_countryName', fields.country);
        this.addMatchOrTerms(filter, 'event_pricing', fields.price);
        this.addMatchOrTerms(filter, 'event_type', fields.type);
        this.addMatchOrTerms(filter, 'event_cityState', fields.state);
        this.addMatchOrTerms(filter, 'event_tagName.keyword', fields.products);
        this.addMatchOrTerms(filter, 'event_venueName', fields.venue);
        this.addMatchOrTerms(filter, 'event_companyName', fields.company);
        this.addMatchOrTerms(filter, 'event_frequency', fields.frequency);
        this.addMatchOrTerms(filter, 'event_functionality', fields.visibility);
        this.addMatchOrTerms(filter, 'event_estimatedTag', fields.estimatedVisitors);

        this.addRange(filter, 'event_startDate', fields['start.gte'], fields['start.lte'], fields['start.gt'], fields['start.lt']);
        this.addRange(filter, 'event_endDate', fields['end.gte'], fields['end.lte'], fields['end.gt'], fields['end.lt']);
        this.addRange(filter, 'event_avgRating', fields.avgRating, undefined);
        this.addRange(filter, 'event_following', fields['following.gte'], fields['following.lte'], fields['following.gt'], fields['following.lt']);
        this.addRange(filter, 'event_speakers', fields['speaker.gte'], fields['speaker.lte'], fields['speaker.gt'], fields['speaker.lt']);
        this.addRange(filter, 'event_exhibitors', fields['exhibitors.gte'], fields['exhibitors.lte'], fields['exhibitors.gt'], fields['exhibitors.lt']);
        this.addRange(filter, 'event_editionsCount', fields['editions.gte'], fields['editions.lte'], fields['editions.gt'], fields['editions.lt']);

        // add active filter
        addActiveFilter( fields['active.gte'], fields['active.lte'], fields['active.gt'], fields['active.lt'] );

        if (fields['user.designation'] && fields['user.designation'].length > 0) {
            filter.push({ has_child: { type: "user", query: { bool: { must: [ { terms: { "user_designationName": fields['user.designation'] } } ] } } }});
        }

        // check if event is hybrid, physical or online
        if(fields.mode !== undefined) {
            const hybridConditions: any[] = [];
            // event is hybrid
            if(fields.mode.includes('hybrid')) hybridConditions.push({match: { "event_hybrid": "1" } });
            // event is online
            if(fields.mode.includes('online')) hybridConditions.push({ match: {"event_cityId": "1"} });
            // event is physical and not online
            if(fields.mode.includes('physical')) hybridConditions.push({ bool: { must_not: { match: {"event_cityId": "1"} }, must: { match: {"event_hybrid": "0"} }}});

            if (hybridConditions.length === 1) {
                // if only one condition, push it directly
                must.push(hybridConditions[0]);
            }else if (hybridConditions.length > 1) { 
                // if multiple conditions, use 'should' (OR logic)
                must.push({bool: { should: hybridConditions, }});
            }
        }

        // check the maturity of the event
        if(fields.maturity !== undefined) {
            if(fields.maturity === 'new') this.addRange(filter, 'event_editionsCount', 1, 1, undefined, undefined);   // new event
            else if(fields.maturity === 'growing') this.addRange(filter, 'event_editionsCount', 2, 3, undefined, undefined); // growing event
            else if(fields.maturity === 'established') this.addRange(filter, 'event_editionsCount', 4, 8, undefined, undefined); // established event
            else this.addRange(filter, 'event_editionsCount', 9, undefined, undefined, undefined); // flagship event
        }

        // check if event is branded ( TODO: add logic to check if event is series event or not)
        if(fields.isBranded === true) filter.push({exists: { field: "event_brandId" }});

        // add multi search
        addMultiSearch(fields.q);
        addMultiSearch(fields.keywords);

        // bulding within filter
        if(fields.lat && fields.lon){
            if(fields.lat && fields.lon && fields.radius && fields.unit){
                filter.push({ 
                    geo_distance: {  distance: `${fields.radius}${fields.unit}`, 
                    event_geoLocation: { lat: parseFloat(fields.lat), lon: parseFloat(fields.lon) } }
                }) 
            }
        }

        filter.push({ term: { "event_published": "1" } });
        return {must, mustNot, filter};
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
        const queryParams = {
            ...req.query,
        }
        delete queryParams.limit;
        delete queryParams.offset;
        const queryString = qs.stringify(queryParams, { encode: true });
        return `${baseUrl}?${queryString}&limit=${limitNum}&offset=${newOffset}`;
    }

    async getAdvPaginationURL(req: Request, afterKey: string | null) {
        if(!afterKey) return null;
        const baseUrl = `${req.protocol}://${req.get('host')}${req.path}`;
        const queryParams = {
            ...req.query,
            after_key: JSON.stringify(afterKey)
        }
        const queryString = qs.stringify(queryParams, { encode: true });
        return `${baseUrl}?${queryString}`;
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
            { event_id: { order: "asc" , missing: "_last" } }
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