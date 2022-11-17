import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../../Context/AuthContextProvider";
import Search from "../Filter/Search";
import "./Navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Face6Icon from "@mui/icons-material/Face6";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { basketContext } from "../../Context/BasketContexProvider";

const Navbar = () => {
  const { user } = useContext(authContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { basketCount } = useContext(basketContext);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   navigate(`/search?title=${search}`);
  //   setSearch("");
  // };

  const {
    handleLogOut,
    user: { email },
  } = useAuth();

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

          <NavLink to="/marketing">Интернет-маркетинг</NavLink>

          <NavLink to="/smm">SMM</NavLink>

          {email === "azret@mail.ru" ? (
            <NavLink to="/add">Admin</NavLink>
          ) : null}

          <NavLink to="/list">ПРОДУКТЫ</NavLink>

          {/* <Search className="searchNavbar" sx={{ mr: "35px" }}>
            <Search />
          </Search> */}

          <Link to="/">{user.email ? user.email : <span></span>}</Link>

          {email ? (
            <Link to="/auth">
              <Face6Icon onClick={handleLogOut} className="icon_navbar" />
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <LogoutIcon className="icon_navbar" />
            </Link>
          )}

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit">
            <Link to="/basket">
              <Badge badgeContent={basketCount} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </Link>
          </IconButton>
          {/* <Search /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
