import apiSlice from "./api.slice";

const productsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: ({ name, code, productGroups, trademark, page}) => ({
                url: '/products/',
                params: { name, code, productGroups, trademark, page}
            })
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products/',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(product, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getProducts', undefined, draft => {
                    draft.products.push(product);
                });
                const patchResult = dispatch(action);
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            }
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `/products/${data.id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(product, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getProducts', undefined, (draft) => {
                    const index = draft.products.findIndex((item) => item.id === product.id);
                    if (index !== -1) {
                        draft.products[index] = product;
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
        deletedProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getProducts', undefined, (draft) => {
                    const index = draft.products.findIndex((item) => item.id === id);
                    if (index !== -1) {
                        draft.products.splice(index, 1);
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
    useGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeletedProductMutation,
} = productsApi;