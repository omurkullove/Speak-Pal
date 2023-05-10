/** @format */

import React, { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

import Logo from '../../Assets/img/Logo.svg';
import Sphere from '../../Assets/img/Group 9175sphere.svg';
import circleSVG from '../../Assets/img/circle.svg';
import prev_1 from '../../Assets/img/prev_1.svg';
import prev_2 from '../../Assets/img/prev_2.svg';
import prev_3 from '../../Assets/img/prev_3.svg';
import { useNavigate } from 'react-router-dom';

const Preview = () => {
   const CIRCLE_ICONS = [1, 2, 3, 4, 5];

   const { t, i18n } = useTranslation();

   const handleChangeLanguage = () => {
      const newLang = i18n.language === 'en' ? 'ru' : 'en';
      i18n.changeLanguage(newLang);
   };

   const navigate = useNavigate();

   return (
      <main
         className='py-[37px] px-[100px] max-lg:px-[20px]  '
         id='preview_main'
      >
         {CIRCLE_ICONS.map((_, index) => (
            <img
               src={circleSVG}
               className={`absolute  icon${index} `}
               id={index}
               alt='logo'
            />
         ))}

         <header className='flex justify-between '>
            <div className='w-[50%]'>
               <img src={Logo} alt='logo' />
            </div>
            <div className='w-[50%]  flex justify-end gap-x-3'>
               <button
                  className='text-[#415BD4] bg-white w-44 h-11 max-lg:w-36 shadow-buttonShadow rounded-[40px] font-black text-[18px] tracking-[0.045rem] border-2 border-[#415BD4] hover:bg-[#dcdcdc] transition-colors flex items-center  justify-center  gap-x-[5px]'
                  onClick={handleChangeLanguage}
               >
                  <img
                     src={Sphere}
                     alt='Sphere '
                     className='w-[24px] h-[24px]'
                  />
                  {i18n.language === 'en' ? 'Русский' : 'English'}
               </button>
               <button
                  onClick={() => navigate('/login')}
                  className='text-[#415BD4] bg-white w-44 h-11 max-lg:w-36 rounded-[40px] shadow-buttonShadow font-black tracking-[0.045rem] hover:bg-[#dcdcdc]  border-2 border-[#415BD4] transition-colors'
               >
                  {t('preview_sign_in')}
               </button>
            </div>
         </header>
         <section className='bg-red-20 flex gap-x-[30px] mt-[96px] max-lg:flex-col max-lg:mb-[70px]'>
            <div className='w-[45%] max-lg:w-full max-lg:text-center '>
               <h1 className='font-bold text-white text-[55px] leading-[67px] w-[79%] max-lg:w-full'>
                  {t('preview_title')}
               </h1>
               <p className='text-[36px] leading-[36px] text-white mb-[132px] mt-[37px]'>
                  {t('preview_paragraph')}
               </p>
               <button
                  onClick={() => navigate('/register')}
                  className='text-[#465FD4] shadow-buttonShadow rounded-[20px] px-[67px] py-[18px] font-bold bg-white hover:bg-[#dcdcdc] transition-colors '
               >
                  {t('preview_button_start')}
               </button>
            </div>
            <div className='w-[55%]      max-lg:w-full max-lg:hidden     flex justify-center flex-col items-center'>
               <div className=' w-full flex  '>
                  <img
                     src={prev_1}
                     alt='prev_1'
                     className='relative left-[450px] max-lg:w-[200px] max-lg:left-[400px]'
                  />
               </div>
               <div className='  w-full flex justify-center'>
                  <img
                     src={prev_3}
                     alt='prev_3'
                     className='relative top-[60px] left-[20px] max-lg:w-[200px] max-lg:-left-[20px] max-lg:-top-[10px] '
                  />
                  <img
                     src={prev_2}
                     alt='prev_2'
                     className='relative bottom-[120px] right-[80px] max-lg:w-[200px] max-lg:right-[60px] '
                  />
               </div>
            </div>
         </section>
      </main>
   );
};

export default Preview;
