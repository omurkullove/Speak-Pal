/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   roomInfo: [],
};

const webRTCSlice = createSlice({
   name: 'webRTCSlice',
   initialState,
   reducers: {
      setGetRoomInfo: (state, action) => {
         state.roomInfo = action.payload;
      },
   },
});

export const { setGetRoomInfo } = webRTCSlice.actions;
export default webRTCSlice.reducer;
