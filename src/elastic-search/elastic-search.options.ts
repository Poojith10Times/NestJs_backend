import { applyDecorators } from "@nestjs/common";
import { ApiBearerAuth, ApiQuery, ApiQueryOptions } from "@nestjs/swagger";
import { FilterDataDto } from "./dto/event-data.dto";
import { PaginationDto } from "./dto/pagination.dto";


export function GetEventDataOptions() {
    return applyDecorators(
        ApiBearerAuth(),
        ...Object.entries(getEventDataOptions).map(([name, options]) => 
            ApiQuery({name, ...options})
        )
    )
}

export const getEventDataOptions: Record<keyof FilterDataDto | keyof PaginationDto, ApiQueryOptions> = {
    q: {
        required: false,
        type: String,
        description: 'Search Query'
    },
    keywords: {
        required: false,
        type: String,
        description: 'Search Query',
        schema: {
            type: 'object',
            properties: {
                include: { type: 'array', items: { type: 'string' } },
                exclude: { type: 'array', items: { type: 'string' } }
            }
        }
    },
    limit: {
        required: false,
        type: Number,
        default: 20,
        description: 'Limit',
        schema: {
            maximum: 20,
            minimum: 1,
        }
    },
    offset: {
        required: false,
        type: Number,
        default: 0,
        description: 'Offset',
    },
    sort: {
        required: false,
        type: String,
        description: 'Sort',
    },
    category: {
        required: false,
        type: String,
        description: 'Event Category Name'
    },
    city: {
        required: false,
        type: String,
        description: 'Event City Name'
    },
    state: {
        required: false,
        type: String,
        description: 'Event City State'
    },
    country: {
        required: false,
        type: String,
        description: 'Event Country Name'
    },
    "products": {
        required: false,
        type: String,
        description: 'Event Tag Name'
    },
    price: {
        required: false,
        type: String,
        description: 'Event Pricing',
        schema: {
            enum: ['free', 'paid', 'not_available', 'free-paid', 'free-paid-not_available']
        }
    },
    "user.designation": {
        required: false,
        type: String,
        description: 'User Designation Name'
    },
    "end.gte": {
        required: false,
        type: String,
        description: 'End Date Greater Than or Equal To'
    },
    "end.lte": {
        required: false,
        type: String,
        description: 'End Date Less Than or Equal To'
    },
    "start.gte": {
        required: false,
        type: String,
        description: 'Start Date Greater Than or Equal To'
    },
    "start.lte": {
        required: false,
        type: String,
        description: 'Start Date Less Than or Equal To'
    },
    "type": {
        required: false,
        type: String,
        description: 'Event Type',
        schema: {
            enum: ['Tradeshow','Conference','Business Floor','Workshop','meetx','Festival','Sport']
        }
    },
    "following.gte": {
        required: false,
        type: String,
        description: 'Event Following Greater Than or Equal To'
    },
    "following.lte": {
        required: false,
        type: String,
        description: 'Event Following Less Than or Equal To'
    },
    "avgRating": {
        required: false,
        type: String,
        description: 'Event Average Rating',
        schema: {
            enum: ['1', '2', '3', '4', '5']
        }
    },
    "start.gt": {
        required: false,
        type: String,
        description: 'Start Date Greater Than'
    },
    "end.gt": {
        required: false,
        type: String,
        description: 'End Date Greater Than'
    },
    "start.lt": {
        required: false,
        type: String,
        description: 'Start Date Less Than'
    },
    "end.lt": {
        required: false,
        type: String,
        description: 'End Date Less Than'
    },
    "active.gte": {
        required: false,
        type: String,
        description: 'Active Date Greater Than or Equal To'
    },
    "active.lte": {
        required: false,
        type: String,
        description: 'Active Date Less Than or Equal To'
    },
    "active.gt": {
        required: false,
        type: String,
        description: 'Active Date Greater Than'
    },
    "active.lt": {
        required: false,
        type: String,
        description: 'Active Date Less Than'
    },
    "venue": {
        required: false,
        type: String,
        description: 'Event Venue Name'
    },
    "lat": {
        required: false,
        type: String,
        description: 'Event Latitude'
    },
    "lon": {
        required: false,
        type: String,
        description: 'Event Longitude'
    },
    "radius": {
        required: false,
        type: Number,
        description: 'Event Radius in KM',
        schema: {
            default: 5,
        }
    },
    "unit": {
        required: false,
        type: String,
        description: 'Event Radius Unit',
        schema: {
            enum: ['km', 'mi', 'ft'],
            default: 'km'
        }
    },
    "company": {
        required: false,
        type: String,
        description: 'Event Company Name',
    },
    "speaker.gte": {
        required: false,
        type: String,
        description: 'Event Speaker Count Greater Than or Equal To'
    },
    "speaker.lte": {
        required: false,
        type: String,
        description: 'Event Speaker Count Less Than or Equal To'
    },
    "speaker.gt": {
        required: false,
        type: String,
        description: 'Event Speaker Count Greater Than'
    },
    "speaker.lt": {
        required: false,
        type: String,
        description: 'Event Speaker Count Less Than'
    },
    "exhibitors.gte": {
        required: false,
        type: String,
        description: 'Event Exhibitors Count Greater Than or Equal To'
    },
    "exhibitors.lte": {
        required: false,
        type: String,
        description: 'Event Exhibitors Count Less Than or Equal To'
    },
    "exhibitors.gt": {
        required: false,
        type: String,
        description: 'Event Exhibitors Count Greater Than'
    },
    "exhibitors.lt": {
        required: false,
        type: String,
        description: 'Event Exhibitors Count Less Than'
    },
    "editions.gte": {
        required: false,
        type: String,
        description: 'Event Editions Count Greater Than or Equal To'
    },
    "editions.lte": {
        required: false,
        type: String,
        description: 'Event Editions Count Less Than or Equal To'
    },
    "editions.gt": {
        required: false,
        type: String,
        description: 'Event Editions Count Greater Than'
    },
    "editions.lt": {
        required: false,
        type: String,
        description: 'Event Editions Count Less Than'
    },
    "view": {
        required: false,
        type: String,
        description: 'Event View',
        schema: {
            enum: ['list', 'agg'],
            default: 'list'
        }
    },
    "after_key": {
        required: false,
        type: String,
        description: 'After Key'
    },
    "frequency": {
        required: false,
        type: String,
        description: 'Event Frequency',
        schema: {
            enum: ['weekly', 'monthly', 'quarterly', 'bi-annual', 'annual', 'biennial', 'triennial', 'quinquennial', 'one-time', 'quadrennial']
        }
    },
    "visibility": {
        required: false,
        type: String,
        description: 'Event Visibility',
        schema: {
            enum: ['open', 'private', 'draft']
        }
    },
    "mode": {
        required: false,
        type: String,
        description: 'Event Mode',
        schema: {
            enum: ['online', 'physical', 'hybrid']
        }
    },
    "estimatedVisitors": {
        required: false,
        type: String,
        description: 'Event Estimated Visitors',
        schema: {
            enum: ['nano', 'micro', 'small', 'medium', 'large', 'mega', 'ultra']
        }
    },
    "isBranded": {
        required: false,
        type: Boolean,
        description: 'Event Is Branded',
        schema: {
            enum: ['true', 'false'],
            default: 'false'
        }
    },
    "maturity": {
        required: false,
        type: String,
        description: 'Event Maturity',
        schema: {
            enum: ['new', 'growing', 'established', 'flagship']
        }
    }
}