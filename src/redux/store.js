/** @format */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import webRTCSlice from '../features/webRTCslice';
import AccountSlice from '../features/AccountSlice';
import { AuthAPI } from '../Api/Auth.api';

export const store = configureStore({
   name: 'store',
   reducer: {
      webrtc: webRTCSlice,
      account: AccountSlice,
      [AuthAPI.reducerPath]: AuthAPI.reducer,
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(AuthAPI.middleware),
});
