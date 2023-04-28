/** @format */

import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const MainAppRoutes = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<MainPage />} />
         </Routes>
      </>
   );
};

export default MainAppRoutes;
