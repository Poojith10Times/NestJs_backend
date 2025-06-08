type ApiType = {
    [key: string]: {
        endpoint: string;
        id: string;
    };
};

export const Apis: ApiType = {
    CREATE_DEMO: {
        endpoint: 'create-demo',
        id: '8d3bb326-aac2-4c3a-9e56-e810fb2ef5db',
    },
    GET_ALIAS: {
        endpoint: 'get-alias',
        id: '8e30c76a-916b-4048-94ec-3ad087187a4e',
    },
    GET_INDEX_DATA: {
        endpoint: 'get-index-data',
        id: 'bf630d85-2819-4089-a8a8-7bc54d59f4c1',
    },
    GET_PARAMS: {
        endpoint: 'get-params',
        id: '4c9b5645-e89f-46be-a03b-95a0df47be77',
    },
    GET_BASIC_ADVANCED_DATA: {
        endpoint: 'get-basic-advanced',
        id: '70d07c70-f4bd-41d1-8dd4-dd5fdbab4320'
    },
    SEARCH_EVENTS: {
        endpoint: 'search-events',
        id: '3e9d0e4e-b9c9-4e16-8468-9910075c9b88',
    }
}