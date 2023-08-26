import apiSlice from "./api.slice";

const staffsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getStaffs: builder.query({
            serializeQueryArgs: () => {
                return undefined;
            },
            query: ({ codeStaff, nameStaff, phone, page }) => ({
                url: '/staffs',
                params: { codeStaff, nameStaff, phone, page }
            })
        }),
        addStaff: builder.mutation({
            query: (data) => ({
                url: '/staffs/add',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(staff, { queryFulfilled, dispatch }) {
                try {
                    const { data: created } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getStaffs', undefined, (draft) => {
                        draft?.staffs.push(created);
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        deleteStaff: builder.mutation({
            query: (id) => ({
                url: `/staffs/delete/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(staff, { queryFulfilled, dispatch }) {
                try {
                    const { data: created } = await queryFulfilled;
                    dispatch(apiSlice.util.updateQueryData('getStaffs', undefined, (draft) => {
                        console.log(created)
                        const index = draft.staffs.findIndex((item) => item.id === created.id);
                        if(index !== -1) {
                            draft?.staffs.splice(created, 1);
                        }  
                    }))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        updateStaff: builder.mutation({
            query: (data) => ({
                url: '/staffs/update',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(staff, { dispatch, queryFulfilled }) {
                const action = apiSlice.util.updateQueryData('getStaffs', undefined, (draft) => {
                    const index = draft.staffs.findIndex((item) => item.id === staff.id);
                    if (index !== -1) {
                        draft.staffs[index] = staff;
                    }
                });
                const patchResult = dispatch(action);
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            }
        })
    })
})

export const {
    useGetStaffsQuery,
    useAddStaffMutation,
    useDeleteStaffMutation,
    useUpdateStaffMutation
} = staffsApi