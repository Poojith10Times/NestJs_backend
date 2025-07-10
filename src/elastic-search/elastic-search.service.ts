import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdvancedFieldsDto } from './dto/advanced-fields.dto';
import { FilterDataDto, ResponseDataDto, ResponseDataSchema } from './dto/event-data.dto';
import { SharedFunctionsService } from 'src/utils/shared-functions.service';
import { Apis } from 'src/Api-Types/api-types';
import { CustomElasticsearchService } from './custom-elasticsearch.service';
import { PaginationDto } from './dto/pagination.dto';
import { Request } from 'express';
import { retryWithFaultHandling } from 'src/fault-tolerance';

@Injectable()
export class ElasticSearchService {
    constructor(
        private readonly prismaService: PrismaService, 
        private readonly elasticsearchService: CustomElasticsearchService,
        private readonly sharedFunctionsService: SharedFunctionsService
    ) {}

    async defaultCaseData(requiredFields: string[], pagination: PaginationDto, sortClause: any[]) {
        const startTime = Date.now();
        const eventData = await this.elasticsearchService.search({
            index: process.env.TESTING_INDEX,
            body: {
                size: pagination?.limit,
                from: pagination?.offset,
                sort: sortClause,
                _source: requiredFields,
                query: {
                    bool: {
                        filter: [{ term: { "event_published": "1" } }],
                        must_not: [{ term: { "event_status": "U" } }]
                    }
                }
            }
        })
        const endTime = Date.now();
        const apiResponseTime = (endTime - startTime) / 1000;
        console.log(`Default List ElasticSearch API Response Time: ${apiResponseTime} seconds`);
        return eventData;
    }

    async getDefaultAggregationData(filterFields: FilterDataDto){
        const defaultAggregations = await this.sharedFunctionsService.getDefaultAggregations(filterFields);
        const todayDate = new Date();
        const startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1).toISOString().split('T')[0];
        const query = {
            bool: {
                filter: [
                    { term: { "event_published": "1" } },
                    { range: { "event_startDate": { gte: startDate } } },
                ],
                must_not: [
                    { term: { "event_status": "U" } },
                ]
            }
        }
        const startTime = Date.now();
        const eventData = await this.elasticsearchService.search({
            index: process.env.TESTING_INDEX,
            body: {
                size: 0,
                query,
                aggs: defaultAggregations,
            }
        })
        const endTime = Date.now();
        const apiResponseTime = (endTime - startTime) / 1000;
        console.log(`Default Aggregation ElasticSearch API Response Time: ${apiResponseTime} seconds`);
        return eventData;
    }

    async getFilteredAggregation(filterFields: FilterDataDto, pagination: PaginationDto){
        const baseQuery = await this.sharedFunctionsService.buildBaseQuery(filterFields);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const requestedStartDate = filterFields["start.gte"] ? new Date(filterFields["start.gte"]) : today;
        const requestedEndDate = filterFields["end.lte"] ? new Date(filterFields["end.lte"]) : undefined;

        if (requestedStartDate < today) throw new HttpException('Start date must be today or later.', HttpStatus.BAD_REQUEST);
        if (requestedEndDate && requestedEndDate < today) throw new HttpException('End date must be after start date.', HttpStatus.BAD_REQUEST);
        const startDate = new Date(requestedStartDate.getFullYear(), requestedStartDate.getMonth(), 1).toISOString().split('T')[0];

        const mustQuery = [
            ...baseQuery.bool.must,
            ...baseQuery.bool.filter,
            { range: { "event_startDate": { gte: startDate } } }
        ];
        if(requestedEndDate) mustQuery.push({ range: { "event_endDate": { lte: requestedEndDate.toISOString().split('T')[0] } } });

        const query = { bool: { filter: mustQuery, must_not: [{ term: { "event_status": "U" } }] } };
        console.log(query);
        const aggregationQuery = await this.sharedFunctionsService.buildAggregationQuery(filterFields, pagination);
        const startTime = Date.now();
        const eventData = await this.elasticsearchService.search({
            // index: process.env.INDEX_NAME,   //for staging data testing
            index: process.env.TESTING_INDEX,
            body: {
                size: 0,
                query,
                aggs: aggregationQuery,
            }
        })
        const endTime = Date.now();
        const apiResponseTime = (endTime - startTime) / 1000;
        console.log(`Filtered Aggregation ElasticSearch API Response Time: ${apiResponseTime} seconds`);
        return eventData;
    }

    // get event data based on category and date range
    async getEventData(userId: string, api_id: string, filterFields: FilterDataDto, responseFields: ResponseDataDto, pagination: PaginationDto, req: Request) {
        const startTime = Date.now();
        let eventData: any;
        let statusCode: number = 200;
        let response: any;
        let errorMessage: any = null;
        const ip_address = req.ip;
        try{
            const params = await retryWithFaultHandling(async () => await this.prismaService.api.findUnique({
                where: {id: api_id,},
                select: {basic_parameters: true,advanced_parameters: true,}
            }), { service: 'postgres' });

            const basicKeys = (params?.basic_parameters as string[]) || [];
            const advancedKeys = (params?.advanced_parameters as string[]) || [];
            const selectedAdvancedKeys = Object.keys(responseFields).filter(key => advancedKeys.includes(key));
            const requiredFields = [...basicKeys, ...selectedAdvancedKeys];
            
            try{
                const allowedFilter = await this.sharedFunctionsService.quotaAndFilterVerification(userId, api_id);
                const requestedFilters = Object.keys(filterFields).filter(key => filterFields[key] != undefined);
                const unauthorizedFilters = requestedFilters.filter(filter => !allowedFilter.includes(filter));
                if (unauthorizedFilters.length > 0) throw new HttpException(`Invalid filter(s): ${unauthorizedFilters.join(', ')}`, HttpStatus.BAD_REQUEST);
            }catch(error){
                statusCode = error.statusCode || 500;
                errorMessage = error.message;
                throw error;
            }

            //build the sort array
            const sortClause = await this.sharedFunctionsService.parseSortFields(pagination?.sort, filterFields) || [];
            const queryType = await this.sharedFunctionsService.determineQueryType(filterFields);

            switch(queryType){
                case 'DEFAULT_LIST':
                    console.log('Default List');
                    eventData = await this.defaultCaseData(requiredFields, pagination, sortClause);
                    statusCode = eventData.statusCode || 200;
                    response = await this.sharedFunctionsService.buildListViewResponse(eventData, pagination, req);
                    break;
                
                case 'DEFAULT_AGGREGATION':
                    console.log('Default Aggregation');
                    eventData = await this.getDefaultAggregationData(filterFields);
                    statusCode = eventData.statusCode || 200;
                    response = await this.sharedFunctionsService.buildAggregationViewResponse(eventData, pagination, req, filterFields);
                    break;

                case 'FILTERED_LIST':
                    console.log('Filtered List');
                    const {must, mustNot, filter} = await this.sharedFunctionsService.queryBuilder(filterFields);
                    const startTime = Date.now();
                    eventData = await this.elasticsearchService.search({
                        index: process.env.TESTING_INDEX,
                        body: {
                            size: pagination?.limit,
                            from: pagination?.offset,
                            sort: sortClause,
                            _source: requiredFields,
                            // query: {
                            //     bool: { must: [...must,], must_not: [...mustNot, { term: { "event_status": "U" } }] }
                            // }
                            query: {
                                bool: { must: [...must,], filter: [...filter], must_not: [...mustNot, { term: { "event_status": "U" } }] }
                            }
                        }
                    });
                    const endTime = Date.now();
                    const apiResponseTime = (endTime - startTime) / 1000;
                    console.log(`Filtered List ElasticSearch API Response Time: ${apiResponseTime} seconds`);
                    statusCode = eventData.statusCode || 200;
                    response = await this.sharedFunctionsService.buildListViewResponse(eventData, pagination, req);
                    break;

                case 'FILTERED_AGGREGATION':
                    console.log('Filtered Aggregation');
                    eventData = await this.getFilteredAggregation(filterFields, pagination);
                    statusCode = eventData.statusCode || 200;
                    response = await this.sharedFunctionsService.buildAggregationViewResponse(eventData, pagination, req, filterFields);
                    break;

                default:
                    throw new HttpException('Invalid query type', HttpStatus.BAD_REQUEST);
            }
        }catch(error){
            statusCode = error.statusCode || 500;
            errorMessage = error.message;
            throw error;
        }finally{
            const endTime = Date.now();
            const apiResponseTime =( endTime - startTime) / 1000;
            try{
                await this.sharedFunctionsService.saveAndUpdateApiData(userId, api_id,Apis.SEARCH_EVENTS.endpoint, apiResponseTime, ip_address || '', statusCode, filterFields, responseFields, pagination, errorMessage);
                console.log(`Total API Response Time: ${apiResponseTime} seconds`);
            }catch(error){
                throw error;
            }
        }

        return response;
    }
}