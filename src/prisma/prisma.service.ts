import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
        {
          emit: 'event',
          level: 'error',
        },
      ],
    });
  }
  async onModuleInit() {
    await this.$connect();
    this.$on('query' as never,(event: { query: string; params: string; duration: number }) => {
      console.log('Query:', event.query);
      console.log('Params:', event.params);
      console.log('Duration:', event.duration, 'ms');
    });
  }
}