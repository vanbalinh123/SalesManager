// import apiSlice from "./api.slice";

// const trademarkApi = apiSlice.injectEndpoints({
//     endpoints: builder => ({
//         getTrademark: builder.query({
//             query: () => '/trademark'
//         }),
//     }),
//     overrideExisting: false,
// })

// export const { useGetTrademarkQuery } = trademarkApi;
import apiSlice from "./api.slice";

const trademarkApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTrademark: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: (name) => ({
                url: '/trademarks/',
                params: name,
            }),
        }),
        addTrademark: builder.mutation({
            query: (data) => ({
                url: '/trademarks/',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(trademark, { queryFulfilled, dispatch }) {
                try {
                    const { data: created } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getTrademark', undefined, (draft) => {
                        draft?.push(created);
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        updateTrademark: builder.mutation({
            query: (data) => ({
                url: `/trademarks/${data.id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(updateTrademark, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getTrademark', undefined, (draft) => {
                  const index = draft.findIndex((item) => item.id === updateTrademark.id);
                  if (index !== -1) {
                    draft[index] = updateTrademark;
                  }
                });
                const patchResult = dispatch(action);
                try {
                  await queryFulfilled;
                } catch {
                  patchResult.undo();
                }
              }
        }),        
        deletedTrademark: builder.mutation({
            query: (id) => ({
                url: `/trademarks/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getTrademark', undefined, (draft) => {
                    const index = draft.findIndex((item) => item.id === id);
                    if (index !== -1) {
                        draft.splice(index, 1);
                    }
                });
                const patchResult = dispatch(action)
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
    }),
    overrideExisting: false,
})

export const { 
    useGetTrademarkQuery,
    useAddTrademarkMutation,
    useUpdateTrademarkMutation,
    useDeletedTrademarkMutation
} = trademarkApi;