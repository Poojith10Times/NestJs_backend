import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DemoApiController } from './demo-api/demo-api.controller';
import { DemoApiService } from './demo-api/demo-api.service';
import { DemoApiModule } from './demo-api/demo-api.module';
import { ElasticSearchController } from './elastic-search/elastic-search.controller';
import { ElasticSearchModule } from './elastic-search/elastic-search.module';
import { ElasticSearchService } from './elastic-search/elastic-search.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    DemoApiModule,
    ElasticSearchModule,
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