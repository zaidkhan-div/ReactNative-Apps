import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const AuthAPi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.107:4000/auth" }),
    tagTypes: ["users"],
    endpoints: (builder) => ({
        signUpUser: builder.mutation({
            query: (body) => ({
                url: "/signup",
                method: "POST",
                body
            })
        })
    })
})
export const { useSignUpUserMutation } = AuthAPi;
export default AuthAPi;