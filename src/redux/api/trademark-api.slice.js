import apiSlice from "./api.slice";

const trademarkApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTrademark: builder.query({
            query: () => '/trademark'
        }),
    }),
    overrideExisting: false,
})

export const { useGetTrademarkQuery } = trademarkApi;