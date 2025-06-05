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
    event_categoryName: {
        required: false,
        type: String,
        description: 'Event Category Name'
    },
    event_cityName: {
        required: false,
        type: String,
        description: 'Event City Name'
    },
    event_cityState: {
        required: false,
        type: String,
        description: 'Event City State'
    },
    event_countryName: {
        required: false,
        type: String,
        description: 'Event Country Name'
    },
    event_tagName: {
        required: false,
        type: String,
        description: 'Event Tag Name'
    },
    event_pricing: {
        required: false,
        type: String,
        description: 'Event Pricing',
        schema: {
            enum: ['free', 'paid', 'not_available', 'free-paid', 'free-paid-not_available']
        }
    },
    user_designationName: {
        required: false,
        type: String,
        description: 'User Designation Name'
    },
    endDate_gte: {
        required: false,
        type: String,
        description: 'End Date Greater Than or Equal To'
    },
    endDate_lte: {
        required: false,
        type: String,
        description: 'End Date Less Than or Equal To'
    },
    startDate_gte: {
        required: false,
        type: String,
        description: 'Start Date Greater Than or Equal To'
    },
    startDate_lte: {
        required: false,
        type: String,
        description: 'Start Date Less Than or Equal To'
    },
    event_type: {
        required: false,
        type: String,
        description: 'Event Type',
        schema: {
            enum: ['Tradeshow','Conference','Business Floor','Workshop','meetx','Festival','Sport']
        }
    },
    event_following_gte: {
        required: false,
        type: String,
        description: 'Event Following Greater Than or Equal To'
    },
    event_following_lte: {
        required: false,
        type: String,
        description: 'Event Following Less Than or Equal To'
    },
    event_avgRating: {
        required: false,
        type: String,
        description: 'Event Average Rating',
        schema: {
            enum: ['1', '2', '3', '4', '5']
        }
    },
}