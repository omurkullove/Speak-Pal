/** @format */

import MainAppRoutes from './router/MainAppRoutes';
import MainLayout from './components/MainLayout/MainLayout';
import React from 'react';

const App = () => {
   return (
      <MainLayout>
         <MainAppRoutes />
      </MainLayout>
   );
};

export default App;
