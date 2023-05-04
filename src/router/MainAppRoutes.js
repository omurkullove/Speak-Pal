/** @format */

import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

const MainAppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default MainAppRoutes;
