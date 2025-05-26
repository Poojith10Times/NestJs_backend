import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Apis } from 'src/Api-Types/api-types';
import { AdvancedFieldsDto } from './dto/advanced-fields.dto';
import { CategoryDateDto } from './dto/category-date.dto';

@Controller('elastic-search')
export class ElasticSearchController {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Get(Apis.GET_ALIAS.endpoint)
    @UseGuards(JwtAuthGuard)
    async getAlias(@Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_ALIAS.id;
        const alias = await this.elasticSearchService.getAlias(user_id, api_id);
        return {
            data: alias,
        }
    }

    @Get(Apis.GET_INDEX_DATA.endpoint)
    @UseGuards(JwtAuthGuard)
    async getIndexData(@Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_INDEX_DATA.id;
        return await this.elasticSearchService.getIndexData(user_id, api_id);
    }

    @Get(Apis.GET_PARAMS.endpoint)
    @UseGuards(JwtAuthGuard)
    async getParams(@Query('index_name') query: string, @Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_PARAMS.id;
        return await this.elasticSearchService.getParams(user_id, api_id);
    }

    @Get(Apis.GET_BASIC_ADVANCED_DATA.endpoint)
    @UseGuards(JwtAuthGuard)
    async getBasicAdvancedData(@Query() fields: AdvancedFieldsDto, @Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_BASIC_ADVANCED_DATA.id;
        return await this.elasticSearchService.getBasicAdvancedData(user_id, api_id, fields);
    }

    @Get(Apis.GET_CATEGORY_DATA.endpoint)
    @UseGuards(JwtAuthGuard)
    async getCategoryData(@Query() fields: CategoryDateDto, @Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_CATEGORY_DATA.id;
        return await this.elasticSearchService.getEventData(user_id, api_id, fields);
    }
}
