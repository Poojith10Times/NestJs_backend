import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const FilterDataSchema = z.object({
    "q": z.string().optional(),
    // search keywords include or exclude
    "keywords": z.preprocess((val) => {
        if (typeof val === 'string') {
            // Split by comma and filter out empty strings
            const keywords = val.split(',').map(k => k.trim()).filter(k => k.length > 0);
            const includeKeywords = keywords.filter(k => !k.startsWith('-')).map(k => k.trim());
            const excludeKeywords = keywords.filter(k => k.startsWith('-')).map(k => k.substring(1).trim());
            console.log(includeKeywords, excludeKeywords);
            return {
                include: includeKeywords.length > 0 ? includeKeywords : undefined,
                exclude: excludeKeywords.length > 0 ? excludeKeywords : undefined
            };
        }
        return val;
    }, z.object({
        include: z.array(z.string()).optional(),
        exclude: z.array(z.string()).optional()
    }).optional()),
    "category": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split('|:').map((category) => category.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

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

    //by default tags are included
    "products": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split('|:').map((tag) => tag.trim());
        }
        return val;
    }, z.array(z.string())).optional(),

    "price": z.enum(['free','paid','not_available','free-paid']).optional(),
    "avgRating": z.enum(['1', '2', '3', '4', '5']).optional(),
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
    "speaker.gte": z.string().optional(),
    "speaker.lte": z.string().optional(),
    "speaker.gt": z.string().optional(),
    "speaker.lt": z.string().optional(),
    "exhibitors.gte": z.string().optional(),
    "exhibitors.lte": z.string().optional(),
    "exhibitors.gt": z.string().optional(),
    "exhibitors.lt": z.string().optional(),
    "editions.gte": z.string().optional(),
    "editions.lte": z.string().optional(),
    "editions.gt": z.string().optional(),
    "editions.lt": z.string().optional(),
    "lat": z.preprocess((val) => {
        if (typeof val === 'number') return val.toString();
        if (typeof val === 'string') return val;
        return undefined;
      }, z.string().optional()),
    "lon": z.preprocess((val) => {
        if (typeof val === 'number') return val.toString();
        if (typeof val === 'string') return val;
        return undefined;
        }, z.string().optional()),
    "radius": z.string().optional().default("5"),
    "unit": z.enum(['km', 'mi', "ft"]).optional().default("km"),
    "company": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((company) => company.trim());
        }
        return val;
    }, z.array(z.string())).optional(),
    "view": z.enum(['list', 'agg']).optional().default("list"),
    "after_key": z.string().optional(),
    "frequency": z.enum(['Weekly', 'Monthly', 'Quarterly', 'Bi-annual', 'Annual', 'Biennial', 'Triennial', 'Quinquennial', 'One-time', 'Quadrennial']).optional(),
    "visibility": z.enum(['open', 'private', 'draft']).optional(),
    "mode": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.split(',').map((mode) => mode.trim().toLowerCase());
        }
        return val;
    }, z.array(z.enum(['online', 'physical', 'hybrid'])).optional()),
    "estimatedVisitors": z.enum(['Nano', 'Micro', 'Small', 'Medium', 'Large', 'Mega', 'Ultra']).optional(),
    "isBranded": z.preprocess(
        (val) => {
            if (val === "true") return true;
            if (val === "false") return false;
            return val;
        },
        z.boolean().optional()
    ),
    "maturity": z.preprocess((val) => {
        if (typeof val === 'string') {
            return val.toLowerCase();
        }
        return val;
    }, z.enum(['new', 'growing', 'established', 'flagship']).optional())
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
    message: "the latitude and longitude must be provided",
    path: ['lat', 'lon']
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