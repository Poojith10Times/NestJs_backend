import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const AuthResponseSchema = z.object({
  access_token: z.string(),
  user: z.object({
    email: z.string(),
    name: z.string().nullable(),
  }),
});

export const RegisterUserSchema = z.object({
  email: z.string().email('Invalid email format'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export class RegisterUserDto extends createZodDto(RegisterUserSchema) {}
export class AuthResponseDto extends createZodDto(AuthResponseSchema) {}
