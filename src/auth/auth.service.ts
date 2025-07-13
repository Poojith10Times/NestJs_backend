import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthResponseDto, RegisterUserDto } from './dto/auth.dto';
import { JwtPayload } from './strategies/jwt.strategy';
import { LoginUserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterUserDto) {
    const user = await this.userService.createUser(data);
    const tokens = await this.generateTokens(user.id, user.email);
    try {
      await this.userService.giveFilterAndApiAccess(user.id);
    } catch (error) {
      console.error(error);
    }
    return {
      message: "Success",
      access_token: tokens.access_token,
      user: {
        email: user.email,
        name: user.name,
      },
    };
  }

  async login(data: LoginUserDto){
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
      message: "Success",
      access_token: tokens.access_token,
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