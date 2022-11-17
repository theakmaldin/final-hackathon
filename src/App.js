import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./Context/AuthContextProvider";
import BasketContextProvider from "./Context/BasketContexProvider";
import CommentContextProvider from "./Context/CommentContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BasketContextProvider>
      <AuthContextProvider>
        <CommentContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </ProductContextProvider>
        </CommentContextProvider>
      </AuthContextProvider>
    </BasketContextProvider>
  );
};

export default App;
