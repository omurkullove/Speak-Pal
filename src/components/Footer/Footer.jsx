/** @format */

import Facebook from '../../Assets/img/Vectorfacebook.svg';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/Logo.svg';
import Mail from '../../Assets/img/Vectormail.svg';
import React from 'react';
import Telegramm from '../../Assets/img/Telegramm.svg';
import Twitter from '../../Assets/img/Vectortwitter.svg';
import WhatsApp from '../../Assets/img/whatsapp_svgrepo.com.svg';

const Footer = () => {
   const SOC_MEDIA = [
      {
         id: 1,
         icon: Telegramm,
      },
      {
         id: 2,
         icon: Mail,
      },
      {
         id: 3,
         icon: Facebook,
      },
      {
         id: 4,
         icon: Twitter,
      },
      {
         id: 5,
         icon: WhatsApp,
      },
   ];

   return (
      <footer className='bg-[#415BD4]  flex px-[100px] max-sm:px-[20px] justify-between h-[162px] items-center w-full '>
         <div className='w-[10%] '>
            <img src={Logo} alt='logo' />
         </div>
         <div className='w-[50%]  flex justify-between px-[20px] items-center text-white uppercase underline text-[24px]'>
            <Link
               className=' transition-colors hover:text-[#dedede]'
               to={'/routes/'}
            >
               Privacy Policy
            </Link>
            <Link
               className=' transition-colors hover:text-[#dedede]'
               to={'/routes/'}
            >
               Terms of Use
            </Link>
         </div>
         <div className='flex w-[25%]  justify-between'>
            {SOC_MEDIA.map(item => (
               <img
                  src={item.icon}
                  key={item.id}
                  alt='social-media'
                  className='w-[50px] cursor-pointer hover:scale-105 transition-transform'
               />
            ))}
         </div>
      </footer>
   );
};

export default Footer;
