import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DemoApiService } from './demo-api.service';
import { Apis } from 'src/Api-Types/api-types';

@Controller('demo-api')
export class DemoApiController {
    constructor(private readonly demoApiService: DemoApiService) {}

    @UseGuards(JwtAuthGuard)
    @Get(Apis.CREATE_DEMO.endpoint)
    async getDemoData(@Req() req) {
        const user_id = req.user.id;
        const api_id = Apis.CREATE_DEMO.id;
        const demoData = await this.demoApiService.getDemoData(user_id, api_id);
        return {
            data: demoData,
        }
    }
}
