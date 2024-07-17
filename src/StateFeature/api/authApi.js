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
    againVerification: builder.mutation({
      query: ({ token }) => ({
        url: "/api/v1/auth/againActivate",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    matchUser: builder.mutation({
      query: ({ email }) => ({
        url: "/api/v1/auth/resetPassword",
        method: "POST",
        body: { email },
      }),
    }),
    sendCode: builder.mutation({
      query: ({ email }) => ({
        url: "/api/v1/auth/resetCode",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useVerifiedUserMutation,
  useAgainVerificationMutation,
  useMatchUserMutation,
  useSendCodeMutation,
} = authApi;
