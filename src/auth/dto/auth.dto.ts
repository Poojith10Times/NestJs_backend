import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const AuthResponseSchema = z.object({
  access_token: z.string(),
  user: z.object({
    id: z.string(),
    email: z.string(),
    name: z.string().nullable(),
    status: z.enum(['ACTIVE', 'INACTIVE']).nullable().optional(),
    filters: z.array(z.string()).nullable().optional(),
  }),
});

export class AuthResponseDto extends createZodDto(AuthResponseSchema) {}
