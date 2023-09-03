import apiSlice from "./api.slice";

const invoiceApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getStaffsSalary: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: ({ codeStaff, nameStaff, month, year, page }) => ({
                url: '/invoice/staffsSalary',
                params: { codeStaff, nameStaff, month, year, page }
            })
        }),
        addStaffSalary: builder.mutation({
            query: (data) => ({
                url: '/invoice/staffsSalary/add',
                method: 'POST',
                body: data
            }),
        }),
        updateStaffSalary: builder.mutation({
            query: (data) => ({
                url: '/invoice/staffsSalary/update',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getStaffsSalary', undefined, (draft) => {
                    const index = draft.staffs.findIndex((item) => item.id === args.id);
                    if (index !== -1) {
                        draft.staffs[index] = args;
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
        deleteStaffInvoice: builder.mutation({
            query: (id) => ({
                url: `/invoice/delete/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const { data: created } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getStaffsSalary', undefined, (draft) => {
                        console.log(created)
                        const index = draft.staffs.findIndex((item) => item.id === created.id);
                        if(index !== -1) {
                            draft.staffs.splice(index, 1);
                        }  
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
    })
})

export const {
    useGetStaffsSalaryQuery,
    useAddStaffSalaryMutation,
    useUpdateStaffSalaryMutation,
    useDeleteStaffInvoiceMutation
} = invoiceApi