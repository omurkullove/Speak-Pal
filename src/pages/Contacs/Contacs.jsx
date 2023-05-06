/** @format */

import React from 'react';
import { Tabs } from 'antd';
import emoji from '../../Assets/img/emoji.svg';

const Contacs = () => {
   const CONTACT_ITEMS = [
      {
         key: '1',
         label: (
            <p className='font-semibold text-[26px] leading-[43.57px] '>
               Calls
            </p>
         ),
         children: (
            <div className='w-full flex flex-col items-center mt-[113px] mb-[70px]'>
               <img src={emoji} alt='emoji/' width={128} />
               <p className='font-semibold text-[36px] leading-[43.57px] text-center mb-[17px] mt-[72px]'>
                  History is empty
               </p>
               <p className='font-normal text-[28px] leading-[33.89px]'>
                  You haven’t talked yet
               </p>
               <button className='px-[117px] py-[15px] bg-[#415BD4] text-white font-bold text-[30px] mt-[142px]'>
                  Find a perfect partner
               </button>
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
         children: 'Friend',
      },
      {
         key: '3',
         label: (
            <p className='font-semibold text-[26px] leading-[43.57px] '>
               Blocked
            </p>
         ),
         children: 'Blocked',
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
