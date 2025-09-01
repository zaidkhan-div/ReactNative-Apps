import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../features/TodoSlice"
import ApiCalling from "@/features/ApiCalling";
import userSlice from "@/features/userSlice"

export const store = configureStore({
    reducer: {
        [ApiCalling.reducerPath]: ApiCalling.reducer,
        todoSlice: TodoSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddlewar) =>
        getDefaultMiddlewar().concat(ApiCalling.middleware)
})  