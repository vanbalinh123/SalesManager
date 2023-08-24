import apiSlice from "./api.slice";
import { current } from "@reduxjs/toolkit";

const warehouseApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getImportCoupon: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: ({ code, page, day, month, year }) => ({
                url: '/importCoupon',
                params: { code, page, day, month, year }
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
            query: ({ code, page, day, month, year }) => ({
                url: '/returnCoupon',
                params: { code, page, day, month, year }
            })
        }),
        addReturnCoupon: builder.mutation({
            query: (data) => ({
                url: '/returnCoupon/add',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch }) {
                try {
                    const { data: created } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getReturnCoupon', undefined, (draft) => {
                        draft?.return.push(created);
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
    })
})

export const {
    useGetImportCouponQuery,
    useGetReturnCouponQuery,
    useAddImportCouponMutation,
    useAddReturnCouponMutation
} = warehouseApi;