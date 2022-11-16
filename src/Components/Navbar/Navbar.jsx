import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContextProvider";
import Search from "../Filter/Search";
import "./Navbar.css";

const Navbar = () => {
  const { user, handleLogOut } = React.useContext(authContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/search?title=${search}`);
    setSearch("");
  };

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

          <NavLink to="/add">Add</NavLink>

          <NavLink to="/list">List</NavLink>

          {/* <Search className="searchNavbar" sx={{ mr: "35px" }}>
            <Search />
          </Search> */}

          <Link to="/">{user.email ? user.email : <span>no</span>}</Link>
          <Button sx={{ color: "white" }} onClick={handleLogOut}>
            LogOut
          </Button>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
