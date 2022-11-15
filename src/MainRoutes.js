import React from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "./Components/Auth/Authorization";
import InfoPage from "./Components/InfoPage/InfoPage";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductList from "./Components/Products/ProductList/ProductList";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/smm" element={<InfoPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;
