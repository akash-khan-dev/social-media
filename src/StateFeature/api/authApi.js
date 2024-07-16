import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_UTL,
  }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body,
      }),
    }),
    verifiedUser: builder.mutation({
      query: ({ token, userToken }) => ({
        url: "/api/v1/auth/activate",
        method: "POST",
        body: { token },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useVerifiedUserMutation,
} = authApi;
