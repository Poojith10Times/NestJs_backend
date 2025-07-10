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

// export class CustomElasticsearchService extends Client {
//   constructor(options: ClientOptions) {
//     super(options);
    
//     // Override msearch method to log queries before they're sent
//     const originalMsearch = this.msearch.bind(this);
//     this.msearch = function(params: any, options?: any) {
//       console.log('=== MSEARCH METHOD CALLED ===');
//       if (params && params.body && Array.isArray(params.body)) {
//         console.log('=== MSEARCH QUERIES ===');
//         for (let i = 0; i < params.body.length; i += 2) {
//           const meta = params.body[i];
//           const query = params.body[i + 1];
//           console.log(`\n--- Query ${(i / 2) + 1} ---`);
//           console.log('Meta:', JSON.stringify(meta, null, 2));
//           console.log('Query:', JSON.stringify(query, null, 2));
//         }
//       }
      
//       // Call the original msearch method
//       return originalMsearch.call(this, params, options);
//     };
    
//     // Set up transport logging for other requests
//     const originalRequest = this.transport.request.bind(this.transport);
//     this.transport.request = function(params, options) {
//       console.log(`TRANSPORT: ${params.method} ${params.path}`);
      
//       if (params.body && !params.path?.includes('_msearch')) {
//         console.log('Body:', JSON.stringify(params.body, null, 2));
//       }
      
//       return originalRequest(params, options);
//     };
//   }
// }