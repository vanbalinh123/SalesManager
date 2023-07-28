import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ 
    baseUrl: 'http://localhost:3100',
    prepareHeaders: (headers) => {
        const token = JSON.parse(localStorage.getItem('accessToken'));
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithAuth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    console.log("hehe", result, args, api, extraOptions);
    if(args.url !== 'login' && args.url !== 'register') {
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
    endpoints: builder => ({
        register: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
        }),
        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
        }),
        getProductGroups: builder.query({
            query: ({name}) => ({
                url: '/productGroups',
                params: { name: name },
              }),
        }),
        getTrademark: builder.query({
            query: () => '/trademark'
        }),
        getProducts: builder.query({
            serializeQueryArgs: () => {
                return undefined;
              },
            query: ({ name, code }) => ({
                url: '/products',
                params: { name, code }
            })
            // `products?name=${name}&code=${code}`
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products/add',
                method: 'POST',
                body: data        
            }),
        })

    })

})

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetProductGroupsQuery,
    useGetTrademarkQuery,
    useGetProductsQuery,
    useAddProductMutation
} = apiSlice;

export default apiSlice;