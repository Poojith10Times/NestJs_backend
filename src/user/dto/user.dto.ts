import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

// Login Schema
export const LoginUserSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

// Response Schema
export const UserResponseSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

// DTOs
export class LoginUserDto extends createZodDto(LoginUserSchema) {}
export class UserResponseDto extends createZodDto(UserResponseSchema) {}