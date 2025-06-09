import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

// Base schemas
const FilterTypeSchema = z.enum(['BASIC', 'ADVANCED']);
const StatusSchema = z.enum(['ACTIVE', 'INACTIVE']);

// API DTOs
export const CreateApiSchema = z.object({
  name: z.string().min(1, 'API name is required'),
  slug: z.string().min(1).optional(),
  default_daily_limit: z.number().int().min(1).default(100).optional(),
  basic_parameters: z.array(z.string()).default([]).optional(),
  advanced_parameters: z.array(z.string()).default([]).optional(),
  is_active: z.boolean().default(true).optional(),
});

export const UpdateApiSchema = z.object({
  api_name: z.string().min(1).optional(),
  slug: z.string().min(1).optional(),
  default_daily_limit: z.number().int().min(1).optional(),
  basic_parameters: z.array(z.string()).optional(),
  advanced_parameters: z.array(z.string()).optional(),
  is_active: z.boolean().optional(),
});

export class CreateApiDto extends createZodDto(CreateApiSchema) {}
export class UpdateApiDto extends createZodDto(UpdateApiSchema) {}

// User API Access DTOs
export const CreateUserApiAccessSchema = z.object({
  user_id: z.string(),
  api_id: z.string(),
  daily_limit: z.number().int().min(1).optional(),
});

export const UpdateUserApiAccessSchema = z.object({
  daily_limit: z.number().int().min(1).optional(),
  has_access: z.boolean().optional(),
});

export class CreateUserApiAccessDto extends createZodDto(CreateUserApiAccessSchema) {}
export class UpdateUserApiAccessDto extends createZodDto(UpdateUserApiAccessSchema) {}

// Filter DTOs
export const CreateFilterSchema = z.object({
  filter_name: z.string().min(1, 'Filter name is required'),
  filter_type: FilterTypeSchema,
  is_paid: z.boolean().default(false),
  is_active: z.boolean().default(true),
});

export const CreateFiltersSchema = z.object({
  filters: z.array(CreateFilterSchema).min(1, 'At least one filter is required'),
});

export const UpdateFilterSchema = z.object({
  filter_name: z.string().min(1).optional(),
  filter_type: FilterTypeSchema.optional(),
  is_paid: z.boolean().optional(),
  is_active: z.boolean().optional(),
});

export class CreateFiltersDto extends createZodDto(CreateFiltersSchema) {}
export class UpdateFilterDto extends createZodDto(UpdateFilterSchema) {}

// User Filter Access DTOs
export const CreateUserFilterAccessSchema = z.object({
  user_id: z.string(),
  filter_ids: z.array(z.string()).optional(),
  api_id: z.string().optional(),
  include_paid: z.boolean().default(false),
}).refine(
  (data) => data.filter_ids || data.api_id,
  { message: 'Either filter_ids or api_id must be provided' }
);

export const UpdateUserFilterAccessSchema = z.object({
  has_access: z.boolean(),
});

export class CreateUserFilterAccessDto extends createZodDto(CreateUserFilterAccessSchema) {}
export class UpdateUserFilterAccessDto extends createZodDto(UpdateUserFilterAccessSchema) {}

// Query DTOs
export const GetApisQuerySchema = z.object({
    is_active: z.string().optional().transform(val => {
      if (val === undefined) return undefined;
      if (val.toLowerCase() === 'true') return true;
      if (val.toLowerCase() === 'false') return false;
    }),
});

export const GetFiltersQuerySchema = z.object({
  is_active: z.string().optional().transform(val => {
    if (val === undefined) return undefined;
    if (val.toLowerCase() === 'true') return true;
    if (val.toLowerCase() === 'false') return false;
  }),
  is_paid: z.string().optional().transform(val => {
    if (val === undefined) return undefined;
    if (val.toLowerCase() === 'true') return true;
    if (val.toLowerCase() === 'false') return false;
  }),
  filter_type: FilterTypeSchema.optional(),
});

export const GetUsersQuerySchema = z.object({
  status: StatusSchema.optional(),
});

export const GetUserFilterAccessQuerySchema = z.object({
  api_id: z.string().optional(),
  has_access: z.string().optional().transform(val => {
    if (val === undefined) return undefined;
    if (val.toLowerCase() === 'true') return true;
    if (val.toLowerCase() === 'false') return false;
  }).default('true'),
});

export const GetUsageLogsQuerySchema = z.object({
  user_id: z.string().uuid().optional(),
  api_id: z.string().uuid().optional(),
  status_code: z.string().optional().transform(val => val ? parseInt(val) : undefined),
  from_date: z.string().optional().transform(val => val ? new Date(val) : undefined),
  to_date: z.string().optional().transform(val => val ? new Date(val) : undefined),
  limit: z.string().optional().transform(val => val ? parseInt(val) : 100),
});

export const GetUsageStatsQuerySchema = z.object({
  user_id: z.string().uuid().optional(),
  api_id: z.string().uuid().optional(),
  date_from: z.string().optional().transform(val => val ? new Date(val) : undefined),
  date_to: z.string().optional().transform(val => val ? new Date(val) : undefined),
});

export class GetApisQueryDto extends createZodDto(GetApisQuerySchema) {}
export class GetFiltersQueryDto extends createZodDto(GetFiltersQuerySchema) {}
export class GetUsersQueryDto extends createZodDto(GetUsersQuerySchema) {}
export class GetUserFilterAccessQueryDto extends createZodDto(GetUserFilterAccessQuerySchema) {}
export class GetUsageLogsQueryDto extends createZodDto(GetUsageLogsQuerySchema) {}
export class GetUsageStatsQueryDto extends createZodDto(GetUsageStatsQuerySchema) {}