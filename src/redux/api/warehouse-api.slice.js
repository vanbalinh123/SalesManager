import apiSlice from "./api.slice";

const warehouseApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getImportCoupon: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: ({code, page}) => ({
                url: '/importCoupon',
                params: {code, page}
            })
         }),
         getReturnCoupon: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: ({code, page}) => ({
                url: '/returnCoupon',
                params: {code, page}
            })
         }),
    })
})

export const { 
    useGetImportCouponQuery ,
    useGetReturnCouponQuery
} = warehouseApi;