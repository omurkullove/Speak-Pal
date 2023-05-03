/** @format */

import MainAppRoutes from './router/MainAppRoutes';
import MainLayout from './components/MainLayout/MainLayout';
import React from 'react';
import { Profile } from './pages/Profile/Profile';

const App = () => {
   return (
      <MainLayout>
        <Profile/>
      </MainLayout>
   );
};

export default App;
