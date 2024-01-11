import { useFetch } from '@/lib/reactQuery';

interface Bundle {
    id: number;
    title: string;
    description: string;
}

export const useGetBundles = () => {
    return useFetch<Bundle[]>(`${import.meta.env.VITE_API_URL}/api/bundle`);
};
