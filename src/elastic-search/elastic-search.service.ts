import { Client } from '@elastic/elasticsearch';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ElasticSearchService {
    private readonly client: Client;
    constructor(private readonly prismaService: PrismaService) {
        this.client = new Client({
            node: process.env.ELASTIC_SEARCH_HOST,
        })
    }

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
        const alias = await this.client.cat.aliases({
            format: 'json',
        })
        return alias;
    }
}
