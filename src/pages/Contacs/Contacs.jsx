/** @format */

import React from 'react';
import { Tabs } from 'antd';
import emoji from '../../Assets/img/emoji.svg';
import useSelection from 'antd/es/table/hooks/useSelection';
import { useSelector } from 'react-redux';
import {
   useGetAccountInfoQuery,
   useGetAllUsersQuery,
} from '../../Api/Auth.api';
import { useNavigate } from 'react-router-dom';

const Contacs = () => {
   const { data: AccountInfo } = useGetAccountInfoQuery();

   const { data: AllUsers } = useGetAllUsersQuery();

   const navigate = useNavigate('');

   const CONTACT_ITEMS = [
      {
         key: '1',
         label: (
            <p className='font-semibold text-[26px] leading-[43.57px] '>
               Users
            </p>
         ),
         children: (
            <div>
               {AllUsers?.length ? (
                  AllUsers.map(user => (
                     <div>
                        <h1>{user.username}</h1>
                     </div>
                  ))
               ) : (
                  <div className='w-full flex flex-col items-center mt-[113px] mb-[70px]'>
                     <img src={emoji} alt='emoji/' width={128} />
                     <p className='font-semibold text-[36px] leading-[43.57px] text-center mb-[17px] mt-[72px]'>
                        Users lits is empty
                     </p>
                     <p className='font-normal text-[28px] leading-[33.89px]'>
                        there are no registered users
                     </p>
                     <button
                        className='px-[117px] py-[15px] bg-[#415BD4] text-white font-bold text-[30px] mt-[142px]'
                        onClick={() => navigate('/routes/lobby')}
                     >
                        Find a perfect partner
                     </button>
                  </div>
               )}
            </div>
         ),
      },
      {
         key: '2',
         label: (
            <p className='font-semibold text-[26px] leading-[43.57px] '>
               Friend
            </p>
         ),
         children: (
            <div>
               {AccountInfo?.friends.length ? (
                  AccountInfo?.friends.map(item => <h1>{item}</h1>)
               ) : (
                  <h1>friends list is empty</h1>
               )}
            </div>
         ),
      },
      {
         key: '3',
         label: (
            <p className='font-semibold text-[26px] leading-[43.57px] '>
               Blocked
            </p>
         ),
         children: (
            <div>
               {AccountInfo?.blocked_users.length ? (
                  AccountInfo?.blocked_users.map(item => <h1>{item}</h1>)
               ) : (
                  <h1>Blocked users list is empty</h1>
               )}
            </div>
         ),
      },
   ];

   return (
      <div className='flex flex-col items-center'>
         <div className='w-1/2 flex justify-center mt-[40px]'>
            <h1 className='text-[40px] leading-[48.41px] font-semibold'>
               Contacts
            </h1>
         </div>
         <div className='w-1/2'>
            <div className='mt-[40px] w-full'>
               <Tabs defaultActiveKey='1' centered items={CONTACT_ITEMS} />
            </div>
         </div>
      </div>
   );
};

export default Contacs;
