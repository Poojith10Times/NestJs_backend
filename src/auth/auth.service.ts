import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterUserDto, LoginUserDto } from '../user/dto/user.dto';
import { AuthResponseDto } from './dto/auth.dto';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterUserDto): Promise<AuthResponseDto> {
    const user = await this.userService.createUser(data);
    const tokens = await this.generateTokens(user.id, user.email);
    const apiFilters = await this.userService.giveFilterAndApiAccess(user.id);
    return {
      access_token: tokens.access_token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        filters: apiFilters.filters,
      },
    };
  }

  async login(data: LoginUserDto): Promise<AuthResponseDto> {
    const user = await this.userService.findByEmail(data.email);

    if (!user || !user.password_hash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.userService.validatePassword(
      data.password,
      user.password_hash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (user.status === 'INACTIVE') {
      throw new UnauthorizedException('Account is inactive');
    }

    const tokens = await this.generateTokens(user.id.toString(), user.email);

    return {
      access_token: tokens.access_token,
      user: {
        id: user.id.toString(),
        email: user.email,
        name: user.name,
      },
    };
  }

  private async generateTokens(userId: string, email: string) {
    const payload: JwtPayload = {
      sub: userId,
      email: email,
    };

    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
    };
  }
}