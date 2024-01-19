import apiSlice from "./api.slice";

const productGroups = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProductGroups: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: (name) => ({
                url: '/productGroups/',
                params: name,
            }),
        }),
        addProductGroup: builder.mutation({
            query: (data) => ({
                url: '/productGroups/',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(productGroup, { queryFulfilled, dispatch }) {
                try {
                    const { data: created } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getProductGroups', undefined, (draft) => {
                        draft?.push(created);
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        updateProductGroup: builder.mutation({
            query: (data) => ({
                url: `/productGroups/${data.id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(updatedProductGroup, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getProductGroups', undefined, (draft) => {
                  const index = draft.findIndex((item) => item.id === updatedProductGroup.id);
                  if (index !== -1) {
                    draft[index] = updatedProductGroup;
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
        deletedProductGroup: builder.mutation({
            query: (id) => ({
                url: `/productGroups/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getProductGroups', undefined, (draft) => {
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
    useGetProductGroupsQuery,
    useAddProductGroupMutation,
    useUpdateProductGroupMutation,
    useDeletedProductGroupMutation
} = productGroups;