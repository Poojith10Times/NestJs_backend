import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';
import { ElasticSearchController } from './elastic-search.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UtilsModule } from 'src/utils/utils.module';
import { CustomElasticsearchService } from './custom-elasticsearch.service';
import { AuthModule } from 'src/auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  providers: [
    ElasticSearchService,
    {
      provide: CustomElasticsearchService,
      useFactory: (configService: ConfigService) => {
        return new CustomElasticsearchService({
          node: configService.get('ELASTIC_SEARCH_HOST'),
        });
      },
      inject: [ConfigService],
    }
  ],
  controllers: [ElasticSearchController],
  exports: [ElasticSearchService, CustomElasticsearchService],
  imports: [
    ConfigModule,
    // ElasticsearchModule.registerAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     node: configService.get('ELASTIC_SEARCH_HOST'),
    //   }),
    //   inject: [ConfigService],
    // }),
    UtilsModule,
    AuthModule,
    ThrottlerModule,
  ],
})

export class ElasticSearchModule implements OnModuleInit,OnModuleDestroy{

  async onModuleInit(){
    console.log('ElasticSearchModule initialized');
  }
  async onModuleDestroy(){
    console.log('ElasticSearchModule destroyed');
  }
}
