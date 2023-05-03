/** @format */

import './navbar.css';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../Assets/img/Logo.svg';

const Navbar = () => {
   const [isMenu, setIsMenu] = useState(false);

   const HEADER_NAVIGATION = [
      {
         name: 'Lobby',
         path: '/',
         id: 1,
      },
      {
         name: 'Ranking',
         path: '/',
         id: 2,
      },
      {
         name: 'Contacts',
         path: '/',
         id: 3,
      },
      {
         name: 'Profile',
         path: '/',
         id: 4,
      },
   ];

   const hanldeVisibility = () => {
      setIsMenu(!isMenu);
   };

   return (
      <header className=' px-[100px] h-[70px] flex items-center bg-[#415BD4] max-sm:px-[20px] relative'>
         <nav className='flex flex-row  w-full h-full items-center transparent justify-between'>
            <div className='w-[15%] '>
               <img
                  src={logo}
                  alt='logo'
                  className='max-w-[137px] mx-h-[47px]'
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

            <div className='w-[35%] flex justify-between px-3  max-md:hidden'>
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
            <div className='w-[20%]  ml-[50px] flex justify-between px-7 items-center max-md:hidden '>
               <button className='w-[24px] h-[24px] rounded-full bg-white flex  items-center text-xs justify-center text-[#415BD4] font-extrabold  transition-colors hover:bg-gray-300'>
                  En
               </button>
               <button className='w-[78px] h-[40px] bg-white text-[#415BD4] rounded-md flex items-center justify-center text-bold uppercase text-sm tracking-tight font-extrabold transition-colors hover:bg-gray-300 '>
                  Sign In
               </button>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
