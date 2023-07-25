import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3100',
        prepareHeaders: (headers) => {
            const token = JSON.parse(localStorage.getItem('accessToken'));
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['List', 'Users'],
    endpoints: builder => ({
        register: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
            //invalidatesTags: ['Users']
        }),
        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            //invalidatesTags: ['Users']
        }),
        getProductGroups: builder.query({
            query: () => '/productGroups'
        }),
        getTrademark: builder.query({
            query: () => '/trademark'
        }),
        getProducts: builder.query({
            query: () => '/products',
        }),
    })

})

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetProductGroupsQuery,
    useGetTrademarkQuery,
    useGetProductsQuery
} = apiSlice;

export default apiSlice;