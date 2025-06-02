import { Module, ExecutionContext } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DemoApiModule } from './demo-api/demo-api.module';
import { DemoApiController } from './demo-api/demo-api.controller';
import { DemoApiService } from './demo-api/demo-api.service';
import { ElasticSearchModule } from './elastic-search/elastic-search.module';
import { UtilsModule } from './utils/utils.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ThrottlerModule.forRoot({
      throttlers: [
        {
          limit: Number(process.env.THROTTLE_LIMIT),
          ttl: Number(process.env.THROTTLE_TTL),
          blockDuration: Number(process.env.THROTTLE_BLOCK_DURATION),
        },
      ],
      storage: new ThrottlerStorageRedisService(),
      getTracker: (req: Record<string, any>, context: ExecutionContext) => {
        const user = context.switchToHttp().getRequest().user;
        return user?.id ?? req.ip;
      },
    }),

    PrismaModule,
    AuthModule,
    UserModule,
    DemoApiModule,
    ElasticSearchModule,
    UtilsModule,
  ],

  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    DemoApiService,
  ],

  controllers: [DemoApiController],
})
export class AppModule {}