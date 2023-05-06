/** @format */

import { configureStore } from '@reduxjs/toolkit';
import webRTCSlice from '../features/webRTCslice';

export const store = configureStore({
   name: 'store',
   reducer: {
      webrtc: webRTCSlice,
   },
});
