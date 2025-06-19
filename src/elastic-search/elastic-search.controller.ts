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
