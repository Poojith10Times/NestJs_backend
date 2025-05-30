import { ExecutionContext, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DemoApiController } from './demo-api/demo-api.controller';
import { DemoApiService } from './demo-api/demo-api.service';
import { DemoApiModule } from './demo-api/demo-api.module';
import { ElasticSearchModule } from './elastic-search/elastic-search.module';
import { UtilsModule } from './utils/utils.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

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
        }
      ],
      storage: new ThrottlerStorageRedisService(),
      getTracker: (req: Record<string, any>, context: ExecutionContext) => {
        const user = context.switchToHttp().getRequest().user;
        return user?.id;
      }
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
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    DemoApiService,
  ],
  controllers: [DemoApiController],
})
export class AppModule {}