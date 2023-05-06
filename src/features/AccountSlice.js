/** @format */

import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
   accountInfo: [],
};

const AccountSlice = createSlice({
   name: 'AccountSlice',
   initialState,
   reducers: {
      setGetAccount: () => {},
   },
});
