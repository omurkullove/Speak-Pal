/** @format */

import { Route, Routes, useLocation, useParams } from 'react-router-dom';

import MainLayout from '../components/MainLayout/MainLayout';
import MainPage from '../pages/MainPage';
import { Profile } from '../pages/Profile/Profile';
import Lobby from '../pages/Lobby/Lobby';
import Ranking from '../pages/Ranking/Ranking';
import Contacs from '../pages/Contacs/Contacs';

const MainAppRoutes = () => {
   const params = useLocation();
   console.log(params);
   return (
      <>
         <MainLayout>
            <Routes>
               <Route path='/' element={<MainPage />} />
               <Route path='/lobby' element={<Lobby />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/ranking' element={<Ranking />} />
               <Route path='/contacts' element={<Contacs />} />

               <Route
                  path='*'
                  element={
                     <h1 className='font-black text-[40px] text-canter'>
                        Page not found 404
                     </h1>
                  }
               />
            </Routes>
         </MainLayout>
      </>
   );
};

export default MainAppRoutes;
