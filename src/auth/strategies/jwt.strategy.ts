import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { Redis } from 'ioredis';

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
    console.log(cacheKey);
    const cachedUser = await this.redis.get(cacheKey);
    if (cachedUser) {
      console.log('Getting data from cache', cachedUser);
      return JSON.parse(cachedUser);
    }
    console.log('Getting data from database');
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        email: true,
        name: true,
        status: true,
      },
    });

    if (!user || user.status === 'INACTIVE') {
      throw new UnauthorizedException('User not found or inactive');
    }
    console.log('Setting data to cache');
    await this.redis.set(cacheKey, JSON.stringify(user), 'EX', 60); // 60 seconds

    return {
      id: user.id.toString(),
      email: user.email,
      name: user.name,
      status: user.status,
    };
  }
}