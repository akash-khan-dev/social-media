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
      query: ({ formData }) => ({
        url: "/api/v1/upload/uploadImage",
        method: "POST",
        body: formData,
      }),
    }),
    getAllPost: builder.query({
      query: () => "/api/v1/post/showPost",
    }),
    getUserProfile: builder.query({
      query: (username) => ({
        url: `/api/v1/auth/user/${username}`,
      }),
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
    updateDetails: builder.mutation({
      query: ({ infos, id }) => ({
        url: "/api/v1/auth/uploadDetails",
        method: "PUT",
        body: { infos, id },
      }),
    }),
    addFriend: builder.mutation({
      query: (id) => ({
        url: `/api/v1/auth/addfriend/${id}`,
        method: "PUT",
      }),
    }),
    cancelRequest: builder.mutation({
      query: (id) => ({
        url: `/api/v1/auth/cancelrequest/${id}`,
        method: "PUT",
      }),
    }),
    follow: builder.mutation({
      query: (id) => ({
        url: `/api/v1/auth/follow/${id}`,
        method: "PUT",
      }),
    }),
    unFollow: builder.mutation({
      query: (id) => ({
        url: `/api/v1/auth/unfollow/${id}`,
        method: "PUT",
      }),
    }),
    acceptRequest: builder.mutation({
      query: (id) => ({
        url: `/api/v1/auth/acceptrequest/${id}`,
        method: "PUT",
      }),
    }),
    unFriend: builder.mutation({
      query: (id) => ({
        url: `/api/v1/auth/unfriend/${id}`,
        method: "PUT",
      }),
    }),
    deleteRequest: builder.mutation({
      query: (id) => ({
        url: `/api/v1/auth/deleterequest/${id}`,
        method: "PUT",
      }),
    }),
    reactPost: builder.mutation({
      query: ({ postId, react }) => ({
        url: `/api/v1/react/reactpost`,
        method: "PUT",
        body: { postId, react },
      }),
    }),
    getAllReact: builder.query({
      query: ({ id }) => ({
        url: `/api/v1/react/getAllReact/${id}`,
      }),
    }),
    createComment: builder.mutation({
      query: ({ comment, image, postId }) => ({
        url: `/api/v1/post/comment`,
        method: "PUT",
        body: { comment, image, postId },
      }),
    }),
    savePost: builder.mutation({
      query: (postId) => ({
        url: `/api/v1/post/savepost/${postId}`,
        method: "PUT",
      }),
    }),
    removePost: builder.mutation({
      query: (postId) => ({
        url: `/api/v1/post/removepost/${postId}`,
        method: "DELETE",
      }),
    }),
    searchQuery: builder.mutation({
      query: (searchTerm) => ({
        url: `/api/v1/auth/search/${searchTerm}`,
        method: "POST",
      }),
    }),
    addSearchHistory: builder.mutation({
      query: ({ searchUser }) => ({
        url: `/api/v1/auth/addSearch`,
        method: "PUT",
        body: { searchUser },
      }),
    }),
    getSearchHistory: builder.query({
      query: () => ({
        url: `/api/v1/auth/getSearchHistory`,
      }),
    }),
    removeSearchHistory: builder.mutation({
      query: ({ searchUser }) => ({
        url: `/api/v1/auth/removeSearchHistory`,
        method: "PUT",
        body: { searchUser },
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
  useUpdateDetailsMutation,
  useAddFriendMutation,
  useCancelRequestMutation,
  useFollowMutation,
  useUnFollowMutation,
  useAcceptRequestMutation,
  useUnFriendMutation,
  useDeleteRequestMutation,
  useReactPostMutation,
  useGetAllReactQuery,
  useCreateCommentMutation,
  useSavePostMutation,
  useRemovePostMutation,
  useSearchQueryMutation,
  useAddSearchHistoryMutation,
  useGetSearchHistoryQuery,
  useRemoveSearchHistoryMutation,
} = authApi;
