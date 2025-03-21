import { useQuery } from '@colombalink/based-react'
import { BackendClient, BasedQueryFunctions } from '@ofhp/app-backend'

class QueryWrapper {
    query: {
        [K in keyof BasedQueryFunctions]: (
            payload: Parameters<typeof useQuery<BackendClient, K>>['2'],
            opt?: Parameters<typeof useQuery<BackendClient, K>>['2'],
        ) => ReturnType<typeof useQuery<BackendClient, K>>
    };
}

// @ts-ignore
export const useAppQuery: QueryWrapper['query'] = new Proxy({}, {
    get: (_, name: keyof BasedQueryFunctions) => (
        payload,
        opts
    ) => {
        const based;
        return useQuery(based, name, payload, opts);
    }
});