import apiSlice from "./api.slice";
import { current } from "@reduxjs/toolkit";

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
         addImportCoupon: builder.mutation({
            query: (data) => ({
                url: '/importCoupon/add',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch }) {
                try {
                    const { data: created } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getImportCoupon', undefined, (draft) => {
                        draft?.import.push(created);
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
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
    useGetImportCouponQuery,
    useGetReturnCouponQuery,
    useAddImportCouponMutation
} = warehouseApi;