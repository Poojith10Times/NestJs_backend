import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';
import { ElasticSearchController } from './elastic-search.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule, ElasticsearchService } from '@nestjs/elasticsearch';
import { Client } from '@elastic/elasticsearch';

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

  private readonly client: Client;

  constructor(private readonly elasticsearchService: ElasticsearchService){
    this.client = new Client({
      node: process.env.ELASTIC_SEARCH_HOST,
    })
  }

  async onModuleInit(){
    await this.client.ping();
    this.client.on('response', (err, meta) => {
      if (err) {
        console.error('Elasticsearch error:', err);
        return;
      }
    });
    console.log('ElasticSearchModule initialized');
  }
  async onModuleDestroy(){
    await this.client.close()
    console.log('ElasticSearchModule destroyed');
  }
}
