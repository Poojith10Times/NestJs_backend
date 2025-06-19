import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const FilterDataSchema = z.object({
    "q": z.string().optional(),
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

    // additional filters
    "venue": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((venue) => venue.trim());
        }
        return val;
    }, z.array(z.string())).optional(),
    
    "speaker": z.string().optional(),
    "exhibitors": z.string().optional(),
    "editions": z.string().optional(),

    lat: z.preprocess((val) => {
        if (typeof val === 'number') return val.toString();
        if (typeof val === 'string') return val;
        return undefined;
      }, z.string().optional()),
  
    lon: z.preprocess((val) => {
        if (typeof val === 'number') return val.toString();
        if (typeof val === 'string') return val;
        return undefined;
        }, z.string().optional()),

    radius: z.string().optional().default("5"),
    unit: z.enum(['km', 'mi', "ft"], {
            invalid_type_error: "unit must be one of: km, mi, ft"
        }).optional().default("km"),
}).refine((val) => {
    const hasLat = typeof val.lat === 'string';
    const hasLong = typeof val.lon === 'string';
    if (hasLat && hasLong) {
        return true;
    } else if (!hasLat && !hasLong) {
        return true;
    } else {
        return false;
    }
}, {
    message: "Both latitude and longitude must be provided",
    path: ['lat', 'long']
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