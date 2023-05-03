/** @format */

import { Route, Routes } from 'react-router-dom';

import MainAppRoutes from './router/MainAppRoutes';
import Preview from './pages/Preview/Preview';
import React from 'react';

const App = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Preview />} />
            <Route path='/routes/*' element={<MainAppRoutes />} />
            <Route path='*' element={<h1 className='font-black text-[40px] text-canter'>Page not found 404</h1>}/>
         </Routes>
      </>
   );
};

export default App;
