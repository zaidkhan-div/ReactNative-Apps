import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiCalling = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.100.222:4000/tasks/",
        prepareHeaders: async (headers, { getState }) => {
            const token = getState().user?.accessToken;
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
        }),
    }),
});

export const { useGetTodosQuery, useAddTodoMutation, useCompleteTaskMutation, useGe } = ApiCalling;
export default ApiCalling;


export const AllUser = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.100.222:4000/users/",
        prepareHeaders: async (headers, { getState }) => {
            const token = getState().user.accessToken;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
        endpoints: (builder) => ({
            getAllUsers: builder.query({
                query: () => "find-all"
            })
        })
    })
})

export const { useGetAllUsersQuery } = AllUser;