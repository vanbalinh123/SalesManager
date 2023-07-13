import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({

    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100' }),
    tagTypes: ['List', 'Users'],
    endpoints: builder => ({
        getUsers: builder.query({
            query: (args) => ({
                url: '/users',
                params: args
            }),
            providesTags: ['Users']
        }),
        addNewUser: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        getUserActived: builder.query({
            query: (args) => ({
                url: '/userAcitived',
                params: args
            }),
            providesTags: ['Users']
        }),
        userActived: builder.mutation({
            query: (user) => ({
                url: '/postUserActived',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
    })

})

export const {
    useGetUsersQuery,
    useAddNewUserMutation,
    useUserActivedMutation,
} = apiSlice;

export default apiSlice;