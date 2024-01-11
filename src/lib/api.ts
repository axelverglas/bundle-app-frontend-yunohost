import ky from 'ky';

export const api = {
    get: <T>(url: string, params?: Record<string, string>) => ky.get(url, { searchParams: params }).json<T>(),
    post: <T>(url: string, data: unknown) => ky.post(url, { json: data }).json<T>(),
};
