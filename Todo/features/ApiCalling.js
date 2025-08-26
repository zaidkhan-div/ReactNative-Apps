import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiCalling = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.119:3000/" }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "todos"
        })
    })
})

export const { useGetTodosQuery } = ApiCalling;
export default ApiCalling;

