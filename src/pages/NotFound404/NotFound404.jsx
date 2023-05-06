/** @format */

import { Link } from 'react-router-dom';
import React from 'react';

const NotFound404 = () => {
   return (
      <div className='h-full flex justify-center mb-[75px]'>
         <div className='flex flex-col items-center'>
            <h1 className='text-[#FF0000] text-[96px] font-normal leading-[158.4px] '>
               404
            </h1>
            <p className=' font-normal text-[64px] leading-[74.94px] '>
               PAGE NOT FOUND
            </p>

            <p className='font-medium text-[48px] leading-[58.09px] mt-[52px]'>
               Back?
            </p>
            <div className='w-1/2 gap-x-[72px] flex justify-center mt-[22px] '>
               <Link
                  className='font-normal text-[40px] leading-[48.41px] hover:underline hover:text-[darkgreen] transition-all'
                  to='/routes/lobby'
               >
                  Yes
               </Link>
               <Link
                  className='font-normal text-[40px] leading-[48.41px] hover:underline hover:text-[darkred] transition-all '
                  to='/'
               >
                  No
               </Link>
            </div>
         </div>
      </div>
   );
};

export default NotFound404;
