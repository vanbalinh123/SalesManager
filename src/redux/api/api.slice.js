import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3100/api',
    prepareHeaders: (headers) => {
        const token = JSON.parse(localStorage.getItem('accessToken'));
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithAuth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    // console.log("hehe", result, args, api, extraOptions);
    if (args.url !== 'register') {
        if (result.error && result.error.originalStatus === 401) {
            window.location.href = '/login';
        }
    }
    return result;
};

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithAuth,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({})
})

export default apiSlice;