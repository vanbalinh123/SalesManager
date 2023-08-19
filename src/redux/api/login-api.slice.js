import apiSlice from "./api.slice";

const loginApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
        }),
        userLogin: builder.query({
            query: () => '/userLogin'
        }),
    }),
    overrideExisting: false,
})

export const { 
    useLoginMutation,
    useUserLoginQuery
} = loginApi;