/** @format */

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   );
};

export default MainLayout;
