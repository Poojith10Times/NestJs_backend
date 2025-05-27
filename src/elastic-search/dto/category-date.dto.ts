import { createZodDto } from "nestjs-zod";
import { z } from "zod";


export const CategoryDateSchema = z.object({
    category: z.string().optional(),
    endDate_gte: z.string().date().optional(),
    endDate_lte: z.string().date().optional(),
    startDate_gte: z.string().date().optional(),
    startDate_lte: z.string().date().optional(),
    createdAt_gte: z.string().date().optional(),
    createdAt_lte: z.string().date().optional(),
    impactScore_gte: z.coerce.number().optional(),
    impactScore_lte: z.coerce.number().optional(),
    designation: z.string().optional(),
    event_id: z.string().optional(),
    event_status: z.enum(['A', 'C', 'P', 'U', 'o', 'r'], {
        invalid_type_error: "event_status must be one of: A, C, P, U, o, r"
    }).optional(),
    event_type: z.enum(['Tradeshow','Conference','Business Floor','Workshop','meetx','Festival','Sport'], {
        invalid_type_error: "event_type must be one of: Tradeshow, Conference, Business Floor, Workshop, meetx, Festival, Sport"
    }).optional(),
    event_frequency: z.enum(['Annual','One-time','Biennial','Bi-annual','Monthly','Weekly','Quarterly',' null','Triennial',' One-time','Half- Yearly',' default','Quinquennial'], {
        invalid_type_error: "event_frequency must be one of: Annual, One-time, Biennial, Bi-annual, Monthly, Weekly, Quarterly, null, Triennial, One-time, Half-Yearly, default, Quinquennial"
    }).optional()

})

export class CategoryDateDto extends createZodDto(CategoryDateSchema) {}