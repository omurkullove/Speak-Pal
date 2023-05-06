/** @format */

import { Route, Routes } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import MainAppRoutes from './router/MainAppRoutes';
import Preview from './pages/Preview/Preview';
import React from 'react';
import i18n from './i18n';

const App = () => {
   return (
      <>
         <I18nextProvider i18n={i18n}>
            <Routes>
               <Route path='/' element={<Preview />} />
               <Route path='/routes/*' element={<MainAppRoutes />} />
               <Route
                  path='*'
                  element={
                     <h1 className='font-black text-[40px] text-canter'>
                        Page not found 404
                     </h1>
                  }
               />
            </Routes>
         </I18nextProvider>
      </>
   );
};

export default App;
