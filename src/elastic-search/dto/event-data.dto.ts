import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const FilterDataSchema = z.object({
    category: z.string().optional(),
    endDate_gte: z.string().date().optional(),
    endDate_lte: z.string().date().optional(),
    startDate_gte: z.string().date().optional(),
    startDate_lte: z.string().date().optional(),
    createdAt_gte: z.string().date().optional(),
    createdAt_lte: z.string().date().optional(),
    impactScore_gte: z.coerce.number().optional(),
    impactScore_lte: z.coerce.number().optional(),
    inboundScore_gte: z.coerce.number().optional(),
    inboundScore_lte: z.coerce.number().optional(),
    internationalScore_gte: z.coerce.number().optional(),
    internationalScore_lte: z.coerce.number().optional(),
    editions_gte: z.coerce.number().optional(),
    editions_lte: z.coerce.number().optional(),

    designation: z.string().optional(),
    event_status: z.enum(['A', 'C', 'P', 'U', 'o', 'r'], {
        invalid_type_error: "event_status must be one of: A, C, P, U, o, r"
    }).optional(),
    event_type: z.enum(['Tradeshow','Conference','Business Floor','Workshop','meetx','Festival','Sport'], {
        invalid_type_error: "event_type must be one of: Tradeshow, Conference, Business Floor, Workshop, meetx, Festival, Sport"
    }).optional(),
    event_frequency: z.enum(['Annual','One-time','Biennial','Bi-annual','Monthly','Weekly','Quarterly',' null','Triennial',' One-time','Half- Yearly',' default','Quinquennial'], {
        invalid_type_error: "event_frequency must be one of: Annual, One-time, Biennial, Bi-annual, Monthly, Weekly, Quarterly, null, Triennial, One-time, Half-Yearly, default, Quinquennial"
    }).optional(),
    entry_type: z.enum(['free','paid','not_available','free-paid'], {
        invalid_type_error: "entry_type must be one of: free, paid, not_available, free-paid"
    }).optional()  
})

export class FilterDataDto extends createZodDto(FilterDataSchema) {}

export const ResponseDataSchema= z.object({
    event_limit: z.string().optional().default("20")
    .refine((val) => {
        if (Number(val) > 20) {
            return false;
        }
        return true;
    }, {
        message: "Limit must be less than or equal to 20"
    }),
    event_countryName: z.string().optional(),
    event_created: z.string().optional(),
    event_exhibitors: z.string().optional(),
    event_published: z.string().optional(),
    my_join_field: z.string().optional(),
    event_venueId: z.string().optional(),
    event_score: z.string().optional(),
    
});

export class ResponseDataDto extends createZodDto(ResponseDataSchema) {}