import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({

    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100' }),
    tagTypes: ['List', 'User'],
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
            invalidatesTags: ['User']
        })
    })

})

export const {
    useGetUsersQuery, 
    useAddNewUserMutation 

} = apiSlice;

export default apiSlice;