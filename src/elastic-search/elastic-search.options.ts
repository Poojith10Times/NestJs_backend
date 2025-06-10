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
    tags: {
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
    }
}