import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../features/TodoSlice"
import ApiCalling from "@/features/ApiCalling";

export const store = configureStore({
    reducer: {
        [ApiCalling.reducerPath]: ApiCalling, //api
        todo: TodoSlice,
    },
    middleware: (getDefaultMiddlewar) =>
        getDefaultMiddlewar().concat(ApiCalling.middleware)
})  