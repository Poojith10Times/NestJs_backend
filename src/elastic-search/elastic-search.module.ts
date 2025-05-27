import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';
import { ElasticSearchController } from './elastic-search.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  providers: [ElasticSearchService],
  controllers: [ElasticSearchController],
  exports: [ElasticSearchService],
  imports: [
    ConfigModule,
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        node: configService.get('ELASTIC_SEARCH_HOST'),
      }),
      inject: [ConfigService],
    }),
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
