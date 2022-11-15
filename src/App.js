import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./Context/AuthContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </AuthContextProvider>
  );
};

export default App;
