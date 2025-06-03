import { z } from "zod";
import { createZodDto } from "nestjs-zod";

export const PaginationSchema = z.object({
    limit: z.string().default("20")
    .refine((val) => {
            if (Number(val) > 20) {
                return false;
            }
            return true;
        }, {
            message: "Limit must be less than or equal to 20"
        }),
    offset: z.string()
        .min(0, "Offset must be non-negative")
        .default("0")
        .optional(),
});

export class PaginationDto extends createZodDto(PaginationSchema) {}