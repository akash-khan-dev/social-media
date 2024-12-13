import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_UTL,
    prepareHeaders: (headers) => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (user && user.token) {
        headers.set("Authorization", `Bearer ${user.token}`);
      }
      return headers;
    },
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
    matchOTP: builder.mutation({
      query: ({ otp, email }) => ({
        url: "/api/v1/auth/matchOTP",
        method: "POST",
        body: { otp, email },
      }),
    }),
    changePassword: builder.mutation({
      query: ({ password, email }) => ({
        url: "/api/v1/auth/changePassword",
        method: "POST",
        body: { password, email },
      }),
    }),
    createPost: builder.mutation({
      query: ({ type, images, text, background, user, token }) => ({
        url: "/api/v1/post/createPost",
        method: "POST",
        body: { type, images, text, background, user },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response) => ({
        status: "done",
        data: response,
      }),
    }),
    uploadImage: builder.mutation({
      query: ({ formData, token }) => ({
        url: "/api/v1/upload/uploadImage",
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getAllPost: builder.query({
      query: () => "/api/v1/post/showPost",
    }),
    getUserProfile: builder.query({
      query: (username) => `/api/v1/auth/user/${username}`,
    }),
    imgList: builder.mutation({
      query: ({ path, sort, max }) => ({
        url: "/api/v1/upload/imgList",
        method: "POST",
        body: { path, sort, max },
      }),
    }),
    uploadProfileImage: builder.mutation({
      query: ({ url, id }) => ({
        url: "/api/v1/auth/uploadProfilePicture",
        method: "PUT",
        body: { url, id },
      }),
      transformResponse: (response) => ({
        status: "done",
        data: response,
      }),
    }),
    uploadCoverPicture: builder.mutation({
      query: ({ url, id }) => ({
        url: "/api/v1/auth/uploadCoverPicture",
        method: "PUT",
        body: { url, id },
      }),
      transformResponse: (response) => ({
        status: "done",
        data: response,
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
  useMatchOTPMutation,
  useChangePasswordMutation,
  useCreatePostMutation,
  useUploadImageMutation,
  useGetAllPostQuery,
  useGetUserProfileQuery,
  useImgListMutation,
  useUploadProfileImageMutation,
  useUploadCoverPictureMutation,
} = authApi;
