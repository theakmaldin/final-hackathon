import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="box-navbar">
        <div className="content-navbar">
          <NavLink
            to="/"
            style={{
              fontSize: "24px",
              fontWeight: "400",
              fontFamily: "Roboto, Helbetica, Arial, sans-serif",
            }}>
            ПОТОК
          </NavLink>

          <NavLink href="/smm">Интернет-маркетинг</NavLink>

          <NavLink to="/smm">SMM</NavLink>

          <NavLink to="/auth">Sign up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
