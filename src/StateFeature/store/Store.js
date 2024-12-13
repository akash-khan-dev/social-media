import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slice/authSlice";
import { authApi } from "../api/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    userInformation: authSlice,
  },
  devTools: import.meta.env.MODE != "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
