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
            <Route path='/routes' element={<MainAppRoutes />} />
         </Routes>
      </>
   );
};

export default App;
