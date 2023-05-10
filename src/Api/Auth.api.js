/** @format */
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const AuthAPI = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://35.198.75.101/api' }),
   endpoints: build => ({
      apiLogin: build.mutation({
         query: body => ({
            url: '/accounts/login/',
            method: 'POST',
            body,
         }),
      }),
      getAccountInfo: build.query({
         query: () => ({
            url: '/accounts/1/',
         }),
      }),
      getAllUsers: build.query({
         query: () => ({
            url: '/accounts/',
         }),
      }),
   }),
});

export const {
   useApiLoginMutation,
   useGetAccountInfoQuery,
   useGetAllUsersQuery,
} = AuthAPI;
