import apiSlice from "./api.slice";
import { current } from "@reduxjs/toolkit";

const warehouseApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getImportCoupon: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: ({ code, page, dateBefore, dateAfter}) => ({
                url: '/import/',
                params: { code, page, dateBefore, dateAfter }
            })
            
        }),
        // getImportCoupon: builder.query({
        //     query: () => '/import/'
        // }),
        addImportCoupon: builder.mutation({
            query: (data) => ({
                url: '/import/',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch }) {
                try {
                    const { data: created } = await queryFulfilled;
                
                    console.log(created);
                    dispatch(apiSlice.util.updateQueryData('getImportCoupon', undefined, (draft) => {
                        console.log(JSON.parse(JSON.stringify(draft)));
                        draft?.import.push(created.data.imported);
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