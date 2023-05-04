/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";

export const store = configureStore({
  name: "store",
  reducer: {
    auth: authReducer,
  },
});
