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
        const eventData = await this.elasticsearchService.search({
            index: process.env.INDEX_NAME,
            body: {
                size: pagination?.limit,
                from: pagination?.offset,
                sort: sortClause,
                _source: requiredFields,
                query: {
                    bool: {
                        must: [{ match: { "event_published": "1" } }],
                        must_not: [{ match: { "event_status": "U" } }]
                    }
                }
            }
        })
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

            // default api case in case of no fields are selected
            if (Object.values(filterFields).length === 0){
                eventData = await this.defaultCaseData(requiredFields, pagination, sortClause);
                statusCode = eventData.statusCode || 200;
            }else{
                const must = await this.sharedFunctionsService.queryBuilder(filterFields);
                eventData = await this.elasticsearchService.search({
                    index: process.env.INDEX_NAME,
                    body: {
                        size: pagination?.limit,
                        from: pagination?.offset,
                        sort: sortClause,
                        _source: requiredFields,
                        query: {
                            bool: { must: [...must,], must_not: [{ match: { "event_status": "U" } }] }
                        }
                    }
                });
                statusCode = eventData.statusCode;
            }

            const responseNameChange = await this.sharedFunctionsService.responseNameChange(eventData?.body?.hits?.hits);

            response = {
                count: eventData?.body?.hits?.hits.length,
                next: await this.sharedFunctionsService.getPaginationURL(pagination?.limit.toString(), pagination?.offset.toString(), 'next', req),
                previous: await this.sharedFunctionsService.getPaginationURL(pagination?.limit.toString(), pagination?.offset.toString(), 'previous', req),
                results: responseNameChange,
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
            }catch(error){
                throw error;
            }
        }

        return response;
    }
}