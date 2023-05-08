/** @format */

import { Route, Routes } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import Login from './pages/Auth/Login/Login';
import MainAppRoutes from './router/MainAppRoutes';
import Preview from './pages/Preview/Preview';
import React from 'react';
import i18n from './i18n';
import NotFound404 from './pages/404NotFond/NotFound404';

const App = () => {
   return (
      <>
         <I18nextProvider i18n={i18n}>
            <Routes>
               <Route path='/' element={<Preview />} />
               <Route path='/login' element={<Login />} />
               <Route path='/routes/*' element={<MainAppRoutes />} />
               <Route path='*' element={<NotFound404 />} />
            </Routes>
         </I18nextProvider>
      </>
   );
};

export default App;
