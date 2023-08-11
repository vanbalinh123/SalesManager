import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3100',
    prepareHeaders: (headers) => {
        const token = JSON.parse(localStorage.getItem('accessToken'));
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithAuth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    // console.log("hehe", result, args, api, extraOptions);
    if (args.url !== 'register') {
        if (result.error && result.error.originalStatus === 401) {
            window.location.href = '/login';
        }
    }
    return result;
};

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithAuth,
    refetchOnMountOrArgChange: true,
    endpoints: builder => ({
        register: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
        }),
        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
        }),
        userLogin: builder.query({
            query: () => '/userLogin'
        }),
        getProductGroups: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: (name) => ({
                url: '/productGroups',
                params: name,
            }),
        }),
        addProductGroup: builder.mutation({
            query: (data) => ({
                url: '/productGroups/add',
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
                url: '/productGroups/update',
                method: 'POST',
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
                url: `/productGroup/delete/${id}`,
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
        getTrademark: builder.query({
            query: () => '/trademark'
        }),
        getProducts: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: ({ name, code, productGroups, trademark, page}) => ({
                url: '/products',
                params: { name, code, productGroups, trademark, page}
            })
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products/add',
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
                url: '/product/update',
                method: 'POST',
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
                url: `/product/delete/${id}`,
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
    })

})

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetProductGroupsQuery,
    useGetTrademarkQuery,
    useGetProductsQuery,
    useAddProductMutation,
    useAddProductGroupMutation,
    useUserLoginQuery,
    useUpdateProductMutation,
    useDeletedProductMutation,
    useUpdateProductGroupMutation,
    useDeletedProductGroupMutation
} = apiSlice;

export default apiSlice;