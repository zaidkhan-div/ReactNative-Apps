import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiCalling = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.107:4000/tasks/" }), //http://localhost:3000/todos
    tagTypes: ["todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "getAllTasks",
            providesTags: ["todo"]
        }),
        addTodo: builder.mutation({
            query: (body) => ({
                url: "todos",
                method: "POST",
                body
            }),
            invalidatesTags: ["todo"]
        })
    })
})

export const { useGetTodosQuery, useAddTodoMutation } = ApiCalling;
export default ApiCalling;

