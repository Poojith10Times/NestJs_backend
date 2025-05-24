import { z } from "zod";
import { createZodDto } from "nestjs-zod";

export const AdvancedFieldsSchema = z.object({
    user_published: z.any().optional(),
    user_hasEmail: z.any().optional(),
    user_hasPhone: z.any().optional(),
    user_profileScore: z.number().optional(),
    user_profileCompleted: z.date().optional(),
    user_profileCompletedScore: z.any().optional(),
    user_profilePage: z.boolean().optional(),
    user_showProfile: z.any().optional(),
    user_unsubscribe: z.any().optional(),
    user_crawlStatus: z.any().optional(),
    user_euser: z.any().optional(),
    my_join_field: z.any().optional(),
})

export class AdvancedFieldsDto extends createZodDto(AdvancedFieldsSchema) {}