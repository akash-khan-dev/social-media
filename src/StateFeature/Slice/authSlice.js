import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const userSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      state.userInfo = action.payload;
    },
    loggedOutUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loggedInUser, loggedOutUser } = userSlice.actions;

export default userSlice.reducer;
