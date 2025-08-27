import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiCalling = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.119:3000/" }),
    tagTypes: ["todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "todos",
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

