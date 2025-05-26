import { z } from "zod";
import { createZodDto } from "nestjs-zod";

export const EventSearchSchema = z.object({
    event_status: z.enum(['A', 'C', 'P', 'U'], {
        invalid_type_error: "event_status must be one of: A, C, P, U"
    }).optional()
});

export class EventSearchDto extends createZodDto(EventSearchSchema) {}