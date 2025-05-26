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
        id: '13535bcb-5c7d-43e4-ae37-2c1574b099fb',
    },
    GET_INDEX_DATA: {
        endpoint: 'get-index-data',
        id: '4913e57b-1e58-4ac5-a30a-732f2c3ad199',
    },
    GET_PARAMS: {
        endpoint: 'get-params',
        id: 'bd3f34cb-8aaa-4f99-bdf0-bdf819dd72f5',
    },
    GET_BASIC_ADVANCED_DATA: {
        endpoint: 'get-basic-advanced',
        id: '70d07c70-f4bd-41d1-8dd4-dd5fdbab4320'
    },
    GET_CATEGORY_DATA: {
        endpoint: 'get-category-data',
        id: '2f6b1311-3241-4fc5-a897-2a84eb9c4aa6',
    }

}