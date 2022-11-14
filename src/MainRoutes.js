import React from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "./Components/Auth/Authorization";
import InfoPage from "./Components/InfoPage/InfoPage";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/smm" element={<InfoPage />} />
    </Routes>
  );
};

export default MainRoutes;
