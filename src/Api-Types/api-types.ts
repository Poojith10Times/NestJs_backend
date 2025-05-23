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
    // GET_DEMO: {
    //     endpoint: 'get-demo',
    //     id: '1234567891',
    // },
    GET_ALIAS: {
        endpoint: 'get-alias',
        id: '13535bcb-5c7d-43e4-ae37-2c1574b099fb',
    }
}