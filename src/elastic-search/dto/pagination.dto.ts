import { z } from "zod";
import { createZodDto } from "nestjs-zod";

// export const PaginationSchema = z.object({
//     limit: z.string().default("20")
//     .refine((val) => {
//             if (Number(val) > 20) {
//                 return false;
//             }
//             return true;
//         }, {
//             message: "Limit must be less than or equal to 20"
//         }),
//     offset: z.string().default("0")
//         .transform((val) => Number(val))
//         .refine((val) => val >= 0, {
//             message: "Offset must be non-negative",
//         }),
// });

export const PaginationSchema = z.object({
    limit: z.preprocess(
        (val) => Number(val ?? "20"),
        z.number().max(20, "Limit must be less than or equal to 20")
    ),
    offset: z.preprocess(
        (val) => Number(val ?? "0"),
        z.number().min(0, "Offset must be non-negative")
    ),
});

export class PaginationDto extends createZodDto(PaginationSchema) {}