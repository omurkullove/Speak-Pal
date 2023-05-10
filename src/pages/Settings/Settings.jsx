/** @format */

import React from 'react';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';
import { ImKey } from '@react-icons/all-files/im/ImKey';
import { MdNotifications } from '@react-icons/all-files/md/MdNotifications';
import { ImVolumeHigh } from '@react-icons/all-files/im/ImVolumeHigh';
import { GiOpenBook } from '@react-icons/all-files/gi/GiOpenBook';
import { FaUserTimes } from '@react-icons/all-files/fa/FaUserTimes';
import { BsQuestionCircleFill } from '@react-icons/all-files/bs/BsQuestionCircleFill';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
   const navigate = useNavigate();

   const SETTING_ITEMS = [
      {
         id: 1,
         icon: <MdEmail className='text-[40px]' />,
         title: 'Change Email',
         onClick: () => {
            alert('Change Email');
         },
      },
      {
         id: 2,
         icon: <ImKey className='text-[40px]' />,
         title: 'Change password',
         onClick: () => {
            alert('Change password');
         },
      },
      {
         id: 3,
         icon: <MdNotifications className='text-[40px]' />,
         title: 'Notifications',
         onClick: () => {
            alert('Notifications');
         },
      },
      {
         id: 4,
         icon: <ImVolumeHigh className='text-[40px]' />,
         title: 'Rate us',
         onClick: () => {
            alert('Rate us');
         },
      },
      {
         id: 5,
         icon: <GiOpenBook className='text-[40px]' />,
         title: 'Club rules',
         onClick: () => {
            alert('Club rules');
         },
      },
      {
         id: 6,
         icon: <FaUserTimes className='text-[40px]' />,
         title: 'Delete account',
         onClick: () => {
            alert('Delete account');
         },
      },
      {
         id: 7,
         icon: <BsQuestionCircleFill className='text-[40px]' />,
         title: 'FAQ',
         onClick: () => {
            alert('FAQ');
         },
      },
   ];

   return (
      <div className='flex justify-center'>
         <div className='w-1/2 m-[100px] flex flex-col items-center'>
            <h1 className='font-bold text-[38px] mb-[20px] leading-[33.89px]'>
               Settings
            </h1>
            <div className=' w-1/2'>
               {SETTING_ITEMS.map(item => (
                  <div
                     key={item.id}
                     onClick={item.onClick}
                     className='flex  w-full gap-x-[20px] p-[10px] mt-[20px] hover:text-[#415BD4] transition-shadow cursor-pointer hover:shadow-buttonShadow rounded-sm'
                  >
                     {item.icon}
                     <p className='font-semibold text-[28px] leading-[33.89px]'>
                        {item.title}
                     </p>
                  </div>
               ))}
               <button className='bg-[#415BD4] text-white font-bold py-[15px] w-full mt-[70px] hover:bg-red-700  hover:shadow-buttonShadow transition-all rounded-sm'>
                  Log out
               </button>
            </div>
         </div>
      </div>
   );
};

export default Settings;
