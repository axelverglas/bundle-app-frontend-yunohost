import { useQuery, UseQueryOptions } from 'react-query';
import { QueryFunctionContext } from 'react-query/types/core/types';
import { api } from './api';

type QueryKeyT = [string, object | undefined];
export const fetcher = <T>({ queryKey }: QueryFunctionContext<QueryKeyT>): Promise<T> => {
    const [url, params] = queryKey;
    return api.get<T>(url, params as Record<string, string>);
};

export const useFetch = <T>(url: string | null, params?: object, config?: UseQueryOptions<T, Error, T, QueryKeyT>) => {
    return useQuery<T, Error, T, QueryKeyT>([url ?? '', params], fetcher, {
        enabled: !!url,
        ...config,
    });
};
