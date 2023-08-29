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
    })
})

export const {
    useGetStaffsSalaryQuery,
    useAddStaffSalaryMutation,
    useUpdateStaffSalaryMutation
} = invoiceApi