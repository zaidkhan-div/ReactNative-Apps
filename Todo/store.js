import ApiCalling from "@/features/ApiCalling";
import userSlice from "@/features/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./features/TodoSlice";
import { persistStore, persistReducer } from "redux-persist";


const persisConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["user"]
}

const persistUserReducer = persistReducer(persisConfig, userSlice);

export const store = configureStore({
    reducer: {
        [ApiCalling.reducerPath]: ApiCalling.reducer,
        todoSlice: TodoSlice,
        user: persistUserReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }).concat(ApiCalling.middleware),

})

export const persistor = persistStore(store);