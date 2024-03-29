import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./models/home/counterSlice";
import authSlice from "./models/home/authSlice";

export const store = configureStore({
  reducer: {
    home: counterSlice,
    auth: authSlice,
  },
});