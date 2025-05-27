import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdvancedFieldsDto } from './dto/advanced-fields.dto';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CategoryDateDto } from './dto/category-date.dto';
import { SharedFunctionsService } from 'src/utils/shared-functions.service';
import { serialize } from 'v8';
import { Apis } from 'src/Api-Types/api-types';

@Injectable()
export class ElasticSearchService {
    constructor(
        private readonly prismaService: PrismaService, 
        private readonly elasticsearchService: ElasticsearchService,
        private readonly sharedFunctionsService: SharedFunctionsService
    ) {}

    async quotaVerification(user_id: string, api_id: string) {
        const access = await this.prismaService.userApiAccess.findFirst({
            where: {
                user_id,
                api_id,
                has_access: true,
            },
            select: {
                id: true,
                daily_limit: true,
            }
        })
        if (!access) throw new NotFoundException('Permission denied');
        if (access.daily_limit === 0) throw new NotFoundException('Daily limit reached');
        const updated_daily_limit = access.daily_limit - 1;
        await this.prismaService.userApiAccess.update({
            where: {
                id: access.id,
            },
            data: {
                daily_limit: updated_daily_limit,
            }
        })
        return true;
    }

    async getAlias(user_id: string, api_id: string, ip_address: string) {
        const startTime = Date.now();
        let alias: any;
        let statusCode: number = 200;
        try{
            const isVerified = await this.quotaVerification(user_id, api_id);
            if (!isVerified) throw new NotFoundException('Permission denied');
            alias = await this.elasticsearchService.cat.aliases({
                format: 'json',
            })
        }catch(error){
            statusCode = error.status || 500;
            throw error;
        }finally{
            const endTime = Date.now();
            const apiResponseTime =( endTime - startTime) / 1000;
            await this.sharedFunctionsService.saveApiData(user_id, api_id,Apis.GET_ALIAS.endpoint, apiResponseTime, ip_address, statusCode);
        }

        return alias;
    }

    //  get sorted index data
    async getIndexData(user_id: string, api_id: string, ip_address: string) {
        const startTime = Date.now();
        let index_data: any;
        let statusCode: number = 200;
        const isVerified = await this.quotaVerification(user_id, api_id);
        console.log(process.env.INDEX_NAME);
        try{
            if (!isVerified) throw new NotFoundException('Permission denied');
            index_data = await this.elasticsearchService.search({
                index: process.env.INDEX_NAME,
                body: {
                    sort: [
                        {
                            "user_profileCompletedScore": {
                                "order": "desc"
                            }
                        }
                    ]
                }
            })
        }catch(error){
            statusCode = error.status || 500;
            throw error;
        }finally{
            const endTime = Date.now();
            const apiResponseTime =( endTime - startTime) / 1000;
            await this.sharedFunctionsService.saveApiData(user_id, api_id,Apis.GET_INDEX_DATA.endpoint, apiResponseTime, ip_address, statusCode);
        }
        return {data: index_data.body.hits.hits};
    }

    async getParams(user_id: string, api_id: string, ip_address: string) {
        const startTime = Date.now();
        let params: any;
        let statusCode: number = 200;
        try{
            const isVerified = await this.quotaVerification(user_id, api_id);
            if (!isVerified) throw new NotFoundException('Permission denied');
            params = await this.elasticsearchService.indices.getMapping({
                index : process.env.INDEX_NAME,
            })
        }catch(error){
            statusCode = error.status || 500;
            throw error;
        }finally{
            const endTime = Date.now();
            const apiResponseTime =( endTime - startTime) / 1000;
            await this.sharedFunctionsService.saveApiData(user_id, api_id,Apis.GET_PARAMS.endpoint, apiResponseTime, ip_address, statusCode);
        }
        return {data: params};
    }

    async getBasicAdvancedData(user_id: string, api_id: string, fields: AdvancedFieldsDto, ip_address: string) {
        const startTime = Date.now();
        let basic_advanced_data: any;
        let statusCode: number = 200;
        try{
            const isVerified = await this.quotaVerification(user_id, api_id);
            if (!isVerified) throw new NotFoundException('Permission denied');

            const params = await this.prismaService.api.findUnique({
                where: {
                    id: api_id,
                },
                select: {
                    basic_parameters: true,
                    advanced_parameters: true,
                }
            });

            const basicKeys = (params?.basic_parameters as string[]) || [];
            const advancedKeys = (params?.advanced_parameters as string[]) || [];
            const selectedAdvancedKeys = Object.keys(fields).filter(key => advancedKeys.includes(key));
            const requiredFields = [...basicKeys, ...selectedAdvancedKeys];
        
            basic_advanced_data = await this.elasticsearchService.search({
                index: process.env.INDEX_NAME,
                body: {
                    size: 100,
                    _source: requiredFields,
                    query: {
                        match_all: {},
                    }
                }
            })
        }catch(error){
            statusCode = error.status || 500;
            throw error;
        }finally{
            const endTime = Date.now();
            const apiResponseTime =( endTime - startTime) / 1000;
            await this.sharedFunctionsService.saveApiData(user_id, api_id,Apis.GET_BASIC_ADVANCED_DATA.endpoint, apiResponseTime, ip_address, statusCode, fields);
        }
        return {data: basic_advanced_data.body.hits.hits};
    }

    // async searchEvent(user_id: string, api_id: string, event_status?: string) {
    //     const isVerified = await this.quotaVerification(user_id, api_id);
    //     if (!isVerified) throw new NotFoundException('Permission denied');

    //     const searchQuery = event_status 
    //         ? {
    //             query: {
    //                 term: {
    //                     "event_status": event_status
    //                 }
    //             }
    //         }
    //         : {
    //             query: {
    //                 match_all: {}
    //             }
    //         };

    //     const search_result = await this.elasticsearchService.search({
    //         index: process.env.INDEX_NAME,
    //         body: searchQuery
    //     });

    //     return { data: search_result.body.hits.hits };
    // }




    // get event data based on category and date range
    async getEventData(userId: string, api_id: string, fields: CategoryDateDto, ip_address: string) {
        const startTime = Date.now();
        let eventData: any;
        let statusCode: number = 200;
        try{
            const isVerified = await this.quotaVerification(userId, api_id);
            if (!isVerified) throw new NotFoundException('Permission denied');

            const must = await this.sharedFunctionsService.queryBuilder(fields);

            if (must.length === 0) {
                let emptyFilterData = await this.elasticsearchService.search({
                    index: process.env.INDEX_NAME,
                    body: {
                        size: 1,
                        query: {
                            match_all: {},
                        }
                    }
                })
                return { data: emptyFilterData.body.hits.hits };
            }
            

            eventData = await this.elasticsearchService.search({
                index: process.env.INDEX_NAME,
                body: {
                    query: {
                        bool: {
                            must: [
                                must,
                            ]
                        }
                    }
                }
            })
        }catch(error){
            statusCode = error.status || 500;
            throw error;
        }finally{
            const endTime = Date.now();
            const apiResponseTime =( endTime - startTime) / 1000;
            await this.sharedFunctionsService.saveApiData(userId, api_id,Apis.GET_CATEGORY_DATA.endpoint, apiResponseTime, ip_address, statusCode, fields);
        }

        return { 
            count: JSON.stringify(eventData.body.hits.total, null, 2), 
            data: eventData.body.hits.hits 
        };
    }
}
