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
    GET_DEMO: {
        endpoint: 'get-demo',
        id: '1234567891',
    }
}