import React from "react";
import InfoPage from "./Components/InfoPage/InfoPage";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./Context/AuthContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  );
};

export default App;
