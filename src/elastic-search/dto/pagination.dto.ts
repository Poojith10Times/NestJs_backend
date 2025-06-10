import { z } from "zod";
import { createZodDto } from "nestjs-zod";

export const PaginationSchema = z.object({
    limit: z.preprocess(
        (val) => Number(val ?? "20"),
        z.number().max(20, "Limit must be less than or equal to 20")
    ),
    offset: z.preprocess(
        (val) => Number(val ?? "0"),
        z.number().min(0, "Offset must be non-negative")
    ),
    sort: z.string().optional()
    .refine((val) => {
        if (!val) return true;
        const sortFields = val.split(",");
        return sortFields.every((field) => {
            const cleanField = field.startsWith("-") ? field.slice(1) : field;
            return Object.keys(sortFieldMap).includes(cleanField);
        });
    }, {
        message: "Invalid sort field"
    }),
});

export class PaginationDto extends createZodDto(PaginationSchema) {}

export const sortFieldMap: Record<string, string> = {
    avgRating: "event_avgRating",
    end: "event_endDate",
    start: "event_startDate",
    expectedStart: "event_futureExpexctedStartDate",
    expectedEnd: "event_futureExpexctedEndDate",
    created: "event_created",
    score: "event_score",
    trendingScore: "event_trendingScore",
    totalRating: "event_totalRating",
    totalRequests: "event_totalRequests",
    speakers: "event_speakers",
    following: "event_following",
    companyLevel: "event_companyLevel"
}