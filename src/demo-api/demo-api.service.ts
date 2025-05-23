import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DemoApiService {
    constructor(private readonly prismaService: PrismaService) {}

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

    async getDemoData(user_id: string, api_id: string) {
        const isVerified = await this.quotaVerification(user_id, api_id);
        if (!isVerified) throw new NotFoundException('Permission denied');

        const demoData = await this.prismaService.userApiAccess.findFirst({
            where: {
                user_id,
                api_id,
            },
            select: {
                user: {
                    select: {
                        id: true,
                        email: true,
                    }
                },
                daily_limit: true,
            }
        })
        if (!demoData) throw new NotFoundException('Demo data not found');
        return demoData;
    }
}
