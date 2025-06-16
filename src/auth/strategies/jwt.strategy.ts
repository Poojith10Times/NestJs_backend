import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { Redis } from 'ioredis';
import { retryWithFaultHandling } from 'src/fault-tolerance';

export interface JwtPayload {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    @Inject('REDIS_CLIENT') private redis: Redis,
  ) {
    const jwtSecret = configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: JwtPayload) {
    const userId = payload.sub;
    const cacheKey = `user:${userId}`;
    // redis fault tolerance
    let cachedUser: string | null = null;
    try{
      cachedUser = await retryWithFaultHandling(async () => await this.redis.get(cacheKey), { service: 'redis' });
      if (cachedUser) {
        console.log('Getting User data from cache', cachedUser);
        return JSON.parse(cachedUser);
      }
    } catch (error) {
      console.warn('Error getting User data from cache', error);
    }
    console.log('Getting User data from database');
    const user = await retryWithFaultHandling(async () => await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        email: true,
        name: true,
        status: true,
      },
    }), { service: 'postgres' });

    if (!user || user.status === 'INACTIVE') {
      throw new UnauthorizedException('User not found or inactive');
    }
    console.log('Setting User data to cache');
    // redis fault tolerance when setting user data to cache
    try{
      await retryWithFaultHandling(async () => await this.redis.set(cacheKey, JSON.stringify(user), 'EX', 60 * 60 * 24), { service: 'redis' }); // 24 hours
    } catch (error) {
      console.warn('Error setting User data to cache', error);
    }

    return {
      id: user.id.toString(),
      email: user.email,
      name: user.name,
      status: user.status,
    };
  }
}