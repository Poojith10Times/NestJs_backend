import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Apis } from 'src/Api-Types/api-types';

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
}
