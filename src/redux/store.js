import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "./api/api.slice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer 
    },
    middleware: getDefault => getDefault().concat(apiSlice.middleware)
})

export default store;