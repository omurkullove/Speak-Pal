/** @format */

import './navbar.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Settings from '../../Assets/img/Vectorsetting.svg';
import logo from '../../Assets/img/Logo.svg';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
   const [isMenu, setIsMenu] = useState(false);

   const { t } = useTranslation();

   const HEADER_NAVIGATION = [
      {
         name: t('navbar_item_lobby'),
         path: '/routes/lobby',
         id: 1,
      },
      {
         name: t('navbar_item_ranking'),
         path: '/routes/ranking',
         id: 2,
      },
      {
         name: t('navbar_item_contacts'),
         path: '/routes/contacts',
         id: 3,
      },
      {
         name: t('navbar_item_profile'),
         path: '/routes/profile',
         id: 4,
      },
      {
         name: t('navbar_item_settings'),
         path: '/routes/settings',
         id: 5,
      },
   ];

   const hanldeVisibility = () => {
      setIsMenu(!isMenu);
   };
   const navigate = useNavigate();

   return (
      <header className=' px-[100px] h-[70px] flex items-center bg-[#415BD4] max-sm:px-[20px] relative'>
         <nav className='flex flex-row  w-full h-full items-center transparent justify-between'>
            <div className='w-[15%] '>
               <img
                  src={logo}
                  alt='logo'
                  className='max-w-[137px] mx-h-[47px] '
               />
            </div>
            <MenuOutlined
               className='text-white  text-xl  hidden max-md:block'
               onClick={hanldeVisibility}
            />
            {isMenu && (
               <Menu
                  onMouseLeave={() => setIsMenu(false)}
                  onClick={() => setIsMenu(false)}
                  mode='vertical'
                  className='flex justify-center items-center flex-col bg-white p-[10px] text-[18px] top-[50px] right-[150px] absolute z-10 max-sm:right-[50px]'
                  theme='light'
               >
                  {HEADER_NAVIGATION.map(item => (
                     <Menu.Item
                        key={item.id}
                        style={{
                           padding: '0px 20px',
                        }}
                     >
                        <Link
                           to={item.path}
                           style={{
                              color: '#595959',
                           }}
                        >
                           {item.name}
                        </Link>
                     </Menu.Item>
                  ))}
               </Menu>
            )}

            <div className='w-[55%]  flex justify-between px-3  max-md:hidden'>
               {HEADER_NAVIGATION.map(navItem => (
                  <Link
                     key={navItem.id}
                     to={navItem.path}
                     className='
                     font-extrabold text-white text-[20px] 
                     tracking-tight hover:text-gray-300 transition-colors
                     '
                  >
                     {navItem.name}
                  </Link>
               ))}
            </div>
            <div className='w-[10%]   flex justify-end  items-center max-md:hidden'>
               <img
                  src={Settings}
                  alt='settings'
                  onClick={() => navigate('//')}
                  className='cursor-pointer hover:rotate-90 transition-transform'
               />
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
