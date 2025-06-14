import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Apis } from 'src/Api-Types/api-types';
import { AdvancedFieldsDto } from './dto/advanced-fields.dto';
import { FilterDataDto, ResponseDataDto } from './dto/event-data.dto';
import { CustomThrottlerGuard } from 'src/custom-throttler.guard';
import { PaginationDto } from './dto/pagination.dto';
import { GetEventDataOptions } from './elastic-search.options';

@Controller('v1')
export class ElasticSearchController {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Get(Apis.GET_ALIAS.endpoint)
    async getAlias(@Query() filterFields: FilterDataDto, @Query() responseFields: ResponseDataDto, @Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_ALIAS.id;
        const alias = await this.elasticSearchService.getAlias(user_id, api_id, req.ip, filterFields, responseFields);
        return {
            data: alias,
        }
    }

    @Get(Apis.GET_INDEX_DATA.endpoint)
    async getIndexData(@Query() filterFields: FilterDataDto, @Query() responseFields: ResponseDataDto, @Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_INDEX_DATA.id;
        return await this.elasticSearchService.getIndexData(user_id, api_id, req.ip, filterFields, responseFields);
    }

    @Get(Apis.GET_PARAMS.endpoint)
    async getParams(@Query() filterFields: FilterDataDto, @Query() responseFields: ResponseDataDto, @Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_PARAMS.id;
        return await this.elasticSearchService.getParams(user_id, api_id, req.ip, filterFields, responseFields);
    }

    @Get(Apis.GET_BASIC_ADVANCED_DATA.endpoint)
    async getBasicAdvancedData(@Query() fields: AdvancedFieldsDto, @Query() filterFields: FilterDataDto, @Query() responseFields: ResponseDataDto, @Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.GET_BASIC_ADVANCED_DATA.id;
        return await this.elasticSearchService.getBasicAdvancedData(user_id, api_id, fields, req.ip, filterFields, responseFields);
    }

    // @Get(Apis.SEARCH_EVENT.endpoint)
    // @UseGuards(JwtAuthGuard)
    // async searchEvent(@Query() query: EventSearchDto, @Req() req) {
    //     const user_id = req.user.id;
    //     const api_id = Apis.SEARCH_EVENT.id;
    //     return await this.elasticSearchService.searchEvent(user_id, api_id, query.event_status);
    // }

    @Get(Apis.SEARCH_EVENTS.endpoint)
    @UseGuards(JwtAuthGuard, CustomThrottlerGuard)
    @GetEventDataOptions()
    async getEventData(
        @Query() filterFields: FilterDataDto,
        @Query() responseFields: ResponseDataDto,
        @Query() pagination: PaginationDto,
        @Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.SEARCH_EVENTS.id;
        return await this.elasticSearchService.getEventData(user_id, api_id, filterFields, responseFields, pagination, req);
    }
}
