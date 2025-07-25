import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserResponseDto } from './dto/user.dto';
import { Apis } from 'src/Api-Types/api-types';
import * as bcrypt from 'bcryptjs';
import { retryWithFaultHandling } from 'src/fault-tolerance';
import { RegisterUserDto } from 'src/auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: RegisterUserDto) {
    // Check if user already exists
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) throw new ConflictException('User with this email already exists');
    const hashedPassword = await bcrypt.hash(data.password, 12);
    
    const user = await this.prismaService.user.create({
      data: {
        email: data.email,
        name: data.name,
        password_hash: hashedPassword,
        status: 'ACTIVE',
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async giveFilterAndApiAccess(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // give api access to user
    const api_id = Apis.SEARCH_EVENTS.id;
    const api = await this.prismaService.api.findUnique({
      where: { id: api_id },
    });

    if (!api) {
      throw new NotFoundException('Api not found');
    }

    // get filters for the api
    const filters = await this.prismaService.apiFilter.findMany({
      where: { api_id, is_active: true, is_paid: false },
      select: {
        id: true,
        filter_name: true,
      }
    });

    await retryWithFaultHandling(async () => {
      return await this.prismaService.$transaction(async (tx) => {
        // giving api access to user
        const apiAccess = await tx.userApiAccess.upsert({
          where: {
            user_id_api_id: {
              user_id: userId,
              api_id,
            },
          },
          update: {
            has_access: true,
          },
          create: {
            user_id: userId,
            api_id,
            has_access: true,
          },
        });

        // give filter access to user for all filters
        const filterAccessPromises = filters.map(async (filter) => {
          return await tx.userFilterAccess.upsert({
            where: { 
              user_id_filter_id: { 
                user_id: userId, 
                filter_id: filter.id 
              } 
            },
            update: {
              has_access: true,
            },
            create: {
              user_id: userId,
              filter_id: filter.id,
              has_access: true,
            }
          });
        });

        const filterAccess = await Promise.all(filterAccessPromises);

        return { apiAccess, filterAccess };
      });
    }, { retries: 3, delayMs: 1000 });

    return { message: "Success" };
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      email: user.email,
      name: user.name,
    };
  }

  async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}