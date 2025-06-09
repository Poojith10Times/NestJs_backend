import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateApiDto, CreateFiltersDto, CreateUserApiAccessDto, CreateUserFilterAccessDto, GetApisQueryDto, GetFiltersQueryDto, GetUserFilterAccessQueryDto, UpdateApiDto, UpdateFilterDto, UpdateUserApiAccessDto, UpdateUserFilterAccessDto } from './dto/api.dto';

@Injectable()
export class ApisService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllApis(query: GetApisQueryDto) {
        const where = query.is_active !== undefined ? { is_active: query.is_active } : {};
        
        return await this.prisma.api.findMany({
          where,
          include: {
            apiFilters: true,
            _count: {
              select: {
                userApiAccesses: true,
                usageLogs: true,
              },
            },
          },
        });
    }

    async createApi(createApiDto: CreateApiDto) {
        try {
          return await this.prisma.api.create({
            data: {
                api_name: createApiDto.name,
                slug: createApiDto.slug || '',
                default_daily_limit: createApiDto.default_daily_limit || 100,
                basic_parameters: createApiDto.basic_parameters || [],
                advanced_parameters: createApiDto.advanced_parameters || [],
                is_active: createApiDto.is_active || true,
            },
          });
        } catch (error) {
          if (error.code === 'P2002') {
            throw new ConflictException('API with this name or slug already exists');
          }
          throw error;
        }
    }

    async findApiById(id: string) {
        const api = await this.prisma.api.findUnique({
          where: { id },
          include: {
            apiFilters: true,
            userApiAccesses: {
              include: {
                user: {
                  select: { id: true, email: true, name: true },
                },
              },
            },
          },
        });
    
        if (!api) {
          throw new NotFoundException('API not found');
        }
    
        return api;
    }

    async updateApi(id: string, updateApiDto: UpdateApiDto) {
        try {
          return await this.prisma.api.update({
            where: { id },
            data: updateApiDto,
          });
        } catch (error) {
          if (error.code === 'P2025') {
            throw new NotFoundException('API not found');
          }
          throw error;
        }
    }

    async findUserApiAccesses(userId: string) {
        return await this.prisma.userApiAccess.findMany({
          where: { user_id: userId, has_access: true },
          include: {
            api: {
              select: {
                id: true,
                api_name: true,
                slug: true,
                is_active: true,
              },
            },
          },
        });
    }

    async createUserApiAccess(createUserApiAccessDto: CreateUserApiAccessDto) {
        const { user_id, api_id, daily_limit } = createUserApiAccessDto;
    
        // Get API's default daily limit if not provided
        const api = await this.prisma.api.findUnique({
          where: { id: api_id },
          select: { default_daily_limit: true },
        });
    
        if (!api) {
          throw new NotFoundException('API not found');
        }
    
        return await this.prisma.userApiAccess.upsert({
          where: {
            user_id_api_id: {
              user_id,
              api_id,
            },
          },
          update: {
            daily_limit: daily_limit || api.default_daily_limit,
            has_access: true,
          },
          create: {
            user_id,
            api_id,
            daily_limit: daily_limit || api.default_daily_limit,
            has_access: true,
          },
        });
    }

    async updateUserApiAccess(
        userId: string,
        apiId: string,
        updateUserApiAccessDto: UpdateUserApiAccessDto,
      ) {
        try {
          return await this.prisma.userApiAccess.update({
            where: {
              user_id_api_id: {
                user_id: userId,
                api_id: apiId,
              },
            },
            data: updateUserApiAccessDto,
          });
        } catch (error) {
          if (error.code === 'P2025') {
            throw new NotFoundException('User API access not found');
          }
          throw error;
        }
    }

    async findApiFilters(apiId: string, query: GetFiltersQueryDto) {
        console.log(query);
        return await this.prisma.apiFilter.findMany({
          where: {
            api_id: apiId,
            is_active: query.is_active,
            is_paid: query.is_paid,
            filter_type: query.filter_type,
          },
          include: {
            _count: {
              select: {
                userAccesses: true,
              },
            },
          },
        });
    }

    async createApiFilters(apiId: string, createFiltersDto: CreateFiltersDto) {
        const { filters } = createFiltersDto;
    
        const createdFilters = await this.prisma.apiFilter.createMany({
          data: filters.map((filter) => ({
            api_id: apiId,
            ...filter,
          })),
          skipDuplicates: true,
        });
    
        return {
          count: createdFilters.count,
          message: `${createdFilters.count} filters created`,
        };
    }

    async updateFilter(filterId: string, updateFilterDto: UpdateFilterDto) {
        try {
          return await this.prisma.apiFilter.update({
            where: { id: filterId },
            data: updateFilterDto,
          });
        } catch (error) {
          if (error.code === 'P2025') {
            throw new NotFoundException('Filter not found');
          }
          throw error;
        }
    }

    async findUserFilterAccesses(userId: string, query: GetUserFilterAccessQueryDto) {
        const where: any = { user_id: userId };
        if (query.has_access !== undefined) where.has_access = query.has_access;
    
        const userFilterAccesses = await this.prisma.userFilterAccess.findMany({
          where,
          include: {
            filter: {
              include: {
                api: {
                  select: {
                    id: true,
                    api_name: true,
                    slug: true,
                  },
                },
              },
            },
          },
        });

        // Filter by api_id if provided
        if (query.api_id) {
            return userFilterAccesses.filter(
            (access) => access.filter.api_id === query.api_id,
            );
        }
  
      return userFilterAccesses;
    }

    async createUserFilterAccess(createUserFilterAccessDto: CreateUserFilterAccessDto) {
        const { user_id, filter_ids, api_id, include_paid } = createUserFilterAccessDto;
    
        let filtersToGrant: any[] = [];
    
        if (filter_ids && filter_ids.length > 0) {
          // Grant access to specific filters
          filtersToGrant = await this.prisma.apiFilter.findMany({
            where: {
              id: { in: filter_ids },
              is_active: true,
            },
          });
        } else if (api_id) {
          const where: any = {
            api_id,
            is_active: true,
          };
    
          if (!include_paid) {
            where.is_paid = false;
          }
    
          filtersToGrant = await this.prisma.apiFilter.findMany({ where });
        }
    
        if (filtersToGrant.length === 0) {
          throw new NotFoundException('No valid filters found');
        }
    
        const userFilterAccesses = await Promise.all(
          filtersToGrant.map((filter) =>
            this.prisma.userFilterAccess.upsert({
              where: {
                user_id_filter_id: {
                  user_id,
                  filter_id: filter.id,
                },
              },
              update: {
                has_access: true,
              },
              create: {
                user_id,
                filter_id: filter.id,
                has_access: true,
              },
            }),
          ),
        );
    
        return {
          count: userFilterAccesses.length,
          message: `Access granted to ${userFilterAccesses.length} filters`,
          data: userFilterAccesses,
        };
    }

    async updateUserFilterAccess(
        userId: string,
        filterId: string,
        updateUserFilterAccessDto: UpdateUserFilterAccessDto,
      ) {
        try {
          return await this.prisma.userFilterAccess.update({
            where: {
              user_id_filter_id: {
                user_id: userId,
                filter_id: filterId,
              },
            },
            data: updateUserFilterAccessDto,
          });
        } catch (error) {
          if (error.code === 'P2025') {
            throw new NotFoundException('User filter access not found');
          }
          throw error;
        }
    }
}
