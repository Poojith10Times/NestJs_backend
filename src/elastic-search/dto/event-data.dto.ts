import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const FilterDataSchema = z.object({
    "category": z.string().optional(),

    "city": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((city) => city.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    "state": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((city) => city.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    "country": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((country) => country.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    "tags": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split('|:').map((tag) => tag.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    "price": z.enum(['free','paid','not_available','free-paid'], {
        invalid_type_error: "event_pricing must be one of: free, paid, not_available, free-paid"
    }).optional(),
    "avgRating": z.enum(['1', '2', '3', '4', '5'], {
        invalid_type_error: "event_avgRating must be one of: 1, 2, 3, 4, 5"
    }).optional(),
    "following.gte": z.string().optional(),
    "following.lte": z.string().optional(),
    "user.designation": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((designation) => designation.trim());
        }
        return val;
    }, z.array(z.string())).optional(),
    "end.gte": z.string().date().optional(),
    "end.lte": z.string().date().optional(),
    "start.gte": z.string().date().optional(),
    "start.lte": z.string().date().optional(),
    "start.gt": z.string().date().optional(),
    "end.gt": z.string().date().optional(),
    "start.lt": z.string().date().optional(),
    "end.lt": z.string().date().optional(),

    "active.gte": z.string().date().optional(),
    "active.lte": z.string().date().optional(),
    "active.gt": z.string().date().optional(),
    "active.lt": z.string().date().optional(),

    "type": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((type) => type.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    // event_type: z.enum(['Tradeshow','Conference','Business Floor','Workshop','meetx','Festival','Sport', 'Community', 'Specialty Shows'], {
    //     invalid_type_error: "event_type must be one of: Tradeshow, Conference, Business Floor, Workshop, meetx, Festival, Sport, Community, Specialty Shows"
    // }).optional(),
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