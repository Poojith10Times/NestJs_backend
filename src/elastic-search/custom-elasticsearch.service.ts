import { Injectable } from '@nestjs/common';
import { Client, ClientOptions } from '@elastic/elasticsearch';

@Injectable()
export class CustomElasticsearchService extends Client {
  constructor(options: ClientOptions) {
    super(options);
    const originalRequest = this.transport.request.bind(this.transport);
    this.transport.request = function(params, options) {
      console.log(`${params.method} ${params.path}`);
      if (params.body) {
        console.log('Body:', JSON.stringify(params.body, null, 2));
      }
      return originalRequest(params, options);
    };
  }
}