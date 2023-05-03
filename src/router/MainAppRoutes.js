/** @format */

import { Route, Routes } from 'react-router-dom';

import MainLayout from '../components/MainLayout/MainLayout';
import MainPage from '../pages/MainPage';

const MainAppRoutes = () => {
   return (
      <>
         <MainLayout>
            <Routes>
               <Route path='/' element={<MainPage />} />
            </Routes>
         </MainLayout>
      </>
   );
};

export default MainAppRoutes;
