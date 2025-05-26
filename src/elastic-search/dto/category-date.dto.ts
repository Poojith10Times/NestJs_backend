import { createZodDto } from "nestjs-zod";
import { z } from "zod";


export const CategoryDateSchema = z.object({
    category: z.string().optional(),
    endDate_gte: z.string().date().optional(),
    endDate_lte: z.string().date().optional(),
})

export class CategoryDateDto extends createZodDto(CategoryDateSchema) {}