import apiSlice from "./api.slice";

const staffsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStaffs: builder.query({
      serializeQueryArgs: () => {
        return undefined;
      },
      query: ({ codeStaff, nameStaff, phone, page }) => ({
        url: "/staffs/",
        params: { codeStaff, nameStaff, phone, page },
      }),
    }),
    addStaff: builder.mutation({
      query: (data) => {
        // for (const [key, value] of data) {
        //     console.log(`${key}: ${value}\n`);
        //   }
        const formData = new FormData();
        for (const key in data) {
          formData.append(key, data[key]);
        }

        return {
          url: "/staffs/",
          method: "POST",
          // prepareHeaders: (headers) => {
          //     headers.set("Content-Type", "multipart/form-data");
          //     return headers;
          // },
          // headers: {
          //     "Content-Type": "multipart/form-data",
          // },
          body: formData,
        };
      },
      async onQueryStarted(product, { dispatch, queryFulfilled }) {
        try {
          const { data: created } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getStaffs", undefined, (draft) => {
              draft.staffs.push(created.data.staff);
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    deleteStaff: builder.mutation({
      query: (id) => ({
        url: `/staffs/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const action = apiSlice.util.updateQueryData(
          "getStaffs",
          undefined,
          (draft) => {
            const index = draft.staffs.findIndex((item) => item._id === id);
            if (index !== -1) {
              draft.staffs.splice(index, 1);
            }
          }
        );
        const patchResult = dispatch(action);
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    updateStaff: builder.mutation({
      // query: (data) => ({
      //     url: '/staffs/',
      //     method: 'POST',
      //     body: data
      // }),
      query: (data) => {
        const formData = new FormData();
        for (const key in data) {
          formData.append(key, data[key]);
        }
        return {
          url: `/staffs/${data.id}`,
          method: "PATCH",
          body: formData,
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data: updated } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getStaffs", undefined, (draft) => {
              console.log(JSON.parse(JSON.stringify(draft.staffs)));
              console.log(updated)
              const index = draft.staffs.findIndex(
                (item) => item._id === updated.data.staff._id
              );
              console.log(index);
              if (index !== -1) {
                console.log('cc')
                console.log(JSON.parse(JSON.stringify(draft.staffs[index])));
                draft.staffs[index] = updated.data.staff;
                console.log(JSON.parse(JSON.stringify(draft.staffs[index])));
              }
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useGetStaffsQuery,
  useAddStaffMutation,
  useDeleteStaffMutation,
  useUpdateStaffMutation,
} = staffsApi;
