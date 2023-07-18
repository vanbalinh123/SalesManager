import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3100',
        prepareHeaders: (headers) => {
            const token = JSON.stringify(localStorage.getItem('accessToken'));
            if(token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
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
        getUserActived: builder.query({
            query: (args) => ({
                url: '/my-product',
                params: args
            }),
            //providesTags: ['Users']
        }),
        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            //invalidatesTags: ['Users']
        }),
    })

})

export const {
    useRegisterMutation,
    useLoginMutation,
} = apiSlice;

export default apiSlice;