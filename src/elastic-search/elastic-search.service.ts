import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdvancedFieldsDto } from './dto/advanced-fields.dto';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CategoryDateDto } from './dto/category-date.dto';
import { queryBuilder } from 'src/utils/shared-functions';

@Injectable()
export class ElasticSearchService {
    constructor
    (
        private readonly prismaService: PrismaService, 
        private readonly elasticsearchService: ElasticsearchService
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

    async getAlias(user_id: string, api_id: string) {
        const isVerified = await this.quotaVerification(user_id, api_id);
        if (!isVerified) throw new NotFoundException('Permission denied');
        const alias = await this.elasticsearchService.cat.aliases({
            format: 'json',
        })
        return alias;
    }

    //  get sorted index data
    async getIndexData(user_id: string, api_id: string) {
        const isVerified = await this.quotaVerification(user_id, api_id);
        console.log(process.env.INDEX_NAME);
        
        if (!isVerified) throw new NotFoundException('Permission denied');
        const index_data = await this.elasticsearchService.search({
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
        console.log(index_data);
        return {data: index_data.body.hits.hits};
    }

    async getParams(user_id: string, api_id: string) {
        const isVerified = await this.quotaVerification(user_id, api_id);
        if (!isVerified) throw new NotFoundException('Permission denied');

        const params = await this.elasticsearchService.indices.getMapping({
            index : process.env.INDEX_NAME,
        })
        return {data: params};
    }

    async getBasicAdvancedData(user_id: string, api_id: string, fields: AdvancedFieldsDto) {
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
    
        const basic_advanced_data = await this.elasticsearchService.search({
            index: process.env.INDEX_NAME,
            body: {
                size: 100,
                _source: requiredFields,
                query: {
                    match_all: {},
                }
            }
        })

        return {data: basic_advanced_data.body.hits.hits};
    }

    // get event data based on category and date range
    async getEventData(userId: string, api_id: string, fields: CategoryDateDto) {
        const isVerified = await this.quotaVerification(userId, api_id);
        if (!isVerified) throw new NotFoundException('Permission denied');

        const must = await queryBuilder(fields);

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
        

        const eventData = await this.elasticsearchService.search({
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

        return { data: eventData.body.hits.hits };
    }
}
