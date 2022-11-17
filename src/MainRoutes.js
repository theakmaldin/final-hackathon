import React from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "./Components/Auth/Authorization";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductList from "./Components/Products/ProductList/ProductList";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
// import Search from "./Components/Filter/Search";
import MarketingPage from "./Components/MarketingPage/MarketingPage";
import Basket from "./Components/Basket/Basket";
import SmmPage from "./Components/SmmPage/SmmPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/marketing" element={<MarketingPage />} />
      <Route path="/smm" element={<SmmPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      {/* <Route path="/search" element={<Search />} /> */}
    </Routes>
  );
};

export default MainRoutes;
