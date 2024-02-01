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
            query: (data) => {
               
                // for (const [key, value] of data) {
                //     console.log(`${key}: ${value}\n`);
                //   }
                const formData = new FormData();
                for (const key in data) {
                  formData.append(key, data[key]);
                }
               
                return {
                    url: '/products/',
                    method: 'POST',
                    // prepareHeaders: (headers) => {
                    //     headers.set("Content-Type", "multipart/form-data");
                    //     return headers;
                    // },
                    // headers: {
                    //     "Content-Type": "multipart/form-data",
                    // },
                    body: formData , 
                }
                         
            },
            async onQueryStarted(product, { dispatch, queryFulfilled }) {
                try {
                    const { data: created } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getProducts', undefined, (draft) => {
                        draft.products.push(created.data.products);
                    }))
                } catch (error) {
                    console.log(error)
                }

            }
        }),
        updateProduct: builder.mutation({
            query: (data) => {
                const formData = new FormData();
                for (const key in data) {
                  formData.append(key, data[key]);
                }
                return {
                    url: `/products/${data.id}`,
                    method: 'PATCH',
                    body: formData
                }
               
            },
            async onQueryStarted(id, { dispatch, queryFulfilled }) {

                try {
                    const { data: updated } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getProducts', undefined, (draft) => {
                        // console.log(JSON.parse(JSON.stringify(draft.products)));
                        const index = draft.products.findIndex((item) => item._id === updated.data.product._id);
                        console.log(index)
                        if (index !== -1) {
                            draft.products[index] = updated.data.product;
                          }
                    }))
                } catch (error) {
                    console.log(error)
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
                    const index = draft.products.findIndex((item) => item._id === id);
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