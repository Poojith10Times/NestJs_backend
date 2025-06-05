import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const FilterDataSchema = z.object({
    event_categoryName: z.string().optional(),

    event_cityName: z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((city) => city.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    event_cityState: z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((city) => city.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    event_countryName: z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((country) => country.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    event_tagName: z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split('|:').map((tag) => tag.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    event_pricing: z.enum(['free','paid','not_available','free-paid'], {
        invalid_type_error: "event_pricing must be one of: free, paid, not_available, free-paid"
    }).optional(),
    event_avgRating: z.enum(['1', '2', '3', '4', '5'], {
        invalid_type_error: "event_avgRating must be one of: 1, 2, 3, 4, 5"
    }).optional(),
    event_following_gte: z.string().optional(),
    event_following_lte: z.string().optional(),
    user_designationName: z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((designation) => designation.trim());
        }
        return val;
    }, z.array(z.string())).optional(),
    endDate_gte: z.string().date().optional(),
    endDate_lte: z.string().date().optional(),
    startDate_gte: z.string().date().optional(),
    startDate_lte: z.string().date().optional(),
    event_type: z.enum(['Tradeshow','Conference','Business Floor','Workshop','meetx','Festival','Sport'], {
        invalid_type_error: "event_type must be one of: Tradeshow, Conference, Business Floor, Workshop, meetx, Festival, Sport"
    }).optional(),
})

export class FilterDataDto extends createZodDto(FilterDataSchema) {}

export const ResponseDataSchema= z.object({
    event_created: z.string().optional(),
    event_exhibitors: z.string().optional(),
    event_published: z.string().optional(),
    my_join_field: z.string().optional(),
    event_venueId: z.string().optional(),
    event_score: z.string().optional(),
});

export class ResponseDataDto extends createZodDto(ResponseDataSchema) {}