import apiSlice from "./api.slice";

const registerApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: (user) => ({
                url: '/auth/register',
                method: 'POST',
                body: user
            }),
        }),
    }),
    overrideExisting: false,
})

export const { useRegisterMutation } = registerApi;