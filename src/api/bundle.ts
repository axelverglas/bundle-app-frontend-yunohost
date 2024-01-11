import { useFetch } from '@/lib/reactQuery';
import { Bundle, AdminsResponse, DomainResponse } from '@/types/interface';

export const useGetBundles = () => {
    return useFetch<Bundle[]>(`${import.meta.env.VITE_API_URL}/api/bundle`);
};

export const useGetOneBundle = (id: number) => {
    return useFetch<Bundle>(`${import.meta.env.VITE_API_URL}/api/bundle/${id}`);
};

export const useGetAdmins = () => {
    return useFetch<AdminsResponse>(`${import.meta.env.VITE_API_URL}/api/user`);
};

export const useGetDomains = () => {
    return useFetch<DomainResponse>(`${import.meta.env.VITE_API_URL}/api/domain`);
};
