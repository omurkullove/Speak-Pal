/** @format */

import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import { Profile } from '../pages/Profile/Profile';

const MainAppRoutes = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/' element={<Profile />} />
         </Routes>
      </>
   );
};

export default MainAppRoutes;
