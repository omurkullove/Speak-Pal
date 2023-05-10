/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   accountsList: [],
   tokens: JSON.parse(localStorage.getItem('tokens')) | {},
   accountInfo: [],
};

const API = 'http://35.234.101.131/api';

const AccountSlice = createSlice({
   name: 'AccountSlice',
   initialState,
   reducers: {
      setSaveAccountInfo: (state, action) => {
         state.accountInfo = action.payload;
      },
   },
});

export const { setSaveAccountInfo } = AccountSlice.actions;
export default AccountSlice.reducer;
