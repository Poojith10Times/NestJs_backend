import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';
import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  ThrottlerGuard,
  ThrottlerModuleOptions,
  ThrottlerRequest,
  ThrottlerStorage,
} from '@nestjs/throttler';
import { PrismaService } from 'src/prisma/prisma.service';
import { Apis } from 'src/Api-Types/api-types';
import { FilterDataSchema, ResponseDataSchema } from 'src/elastic-search/dto/event-data.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
  constructor(
    options: ThrottlerModuleOptions,
    storage: ThrottlerStorage,
    protected readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {
    super(options, storage, reflector);
  }

  async handleRequest(requestProps: ThrottlerRequest): Promise<boolean> {
    const request = requestProps.context.switchToHttp().getRequest();
    const user = request.user;
    const ip = request.ip;

    const rawEndpoint = request.route?.path || '';
    const parts = rawEndpoint.split('/').filter(Boolean);
    const endpointName = parts[parts.length - 1];
    const api_id = Object.values(Apis).find(
      (value) => value.endpoint === endpointName,
    )?.id || '';
    const filterFields = FilterDataSchema.partial().parse(request.query);
    const responseFields = ResponseDataSchema.partial().parse(request.query);
    

    try {
      return await super.handleRequest(requestProps);
    } catch (error) {
      await this.prisma.apiUsageLog.create({
        data: {
          user_id: user?.id || '',
          api_id: api_id || '',
          ip_address: ip,
          error_message: error.message,
          endpoint: endpointName || '',
          status_code: HttpStatus.TOO_MANY_REQUESTS,
          api_response_time: 0,
          payload: {
            filterFields: filterFields as unknown as Prisma.InputJsonValue,
            responseFields: responseFields as unknown as Prisma.InputJsonValue,
          },
        },
      });
      throw new HttpException(error.message, HttpStatus.TOO_MANY_REQUESTS);
    }
  }
}