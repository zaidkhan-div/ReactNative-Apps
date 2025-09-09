import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ApiCalling = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.0.110:4000/tasks/",
        prepareHeaders: async (headers) => {
            const token = await AsyncStorage.getItem("accessToken");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "find-all-tasks",
            providesTags: ["todo"],
        }),
        addTodo: builder.mutation({
            query: (body) => ({
                url: "create-task",
                method: "POST",
                body,
            }),
            invalidatesTags: ["todo"],
        }),
        completeTask: builder.mutation({
            query: ({ id, body }) => ({
                url: `completed-task/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["todo"],
        })
    }),
});

export const { useGetTodosQuery, useAddTodoMutation, useCompleteTaskMutation } = ApiCalling;
export default ApiCalling;
