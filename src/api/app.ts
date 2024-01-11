import { useFetch } from '@/lib/reactQuery';

export const useGetApps = () => {
    return useFetch<any>('https://app.yunohost.org/default/v3/apps.json');
};
