/** @format */

import { Route, Routes, useLocation, useParams } from 'react-router-dom';

import Contacs from '../pages/Contacs/Contacs';
import Lobby from '../pages/Lobby/Lobby';
import MainLayout from '../components/MainLayout/MainLayout';
import NotFound404 from '../pages/NotFound404/NotFound404';
import { Profile } from '../pages/Profile/Profile';
import Ranking from '../pages/Ranking/Ranking';
import Room from '../pages/Room/Room';

const MainAppRoutes = () => {
   const params = useLocation();
   return (
      <>
         <MainLayout>
            <Routes>
               <Route path='/lobby' element={<Lobby />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/ranking' element={<Ranking />} />
               <Route path='/contacts' element={<Contacs />} />
               <Route path='/room/:id' element={<Room />} />

               <Route path='*' element={<NotFound404 />} />
            </Routes>
         </MainLayout>
      </>
   );
};

export default MainAppRoutes;
