import { createZodDto } from "nestjs-zod";
import { z } from "zod";


export const CategoryDateSchema = z.object({
    category: z.string().optional(),
    endDate_gte: z.string().date().optional(),
    endDate_lte: z.string().date().optional(),
    event_status: z.enum(['A', 'C', 'P', 'U', 'o', 'r'], {
        invalid_type_error: "event_status must be one of: A, C, P, U, o, r"
    }).optional(),
    event_type: z.enum(['Tradeshow','Conference','Business Floor','Workshop','meetx','Festival','Sport'], {
        invalid_type_error: "event_type must be one of: Tradeshow, Conference, Business Floor, Workshop, meetx, Festival, Sport"
    }).optional()
})

export class CategoryDateDto extends createZodDto(CategoryDateSchema) {}