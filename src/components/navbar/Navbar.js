/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Vitus</span>
        </Link>
        <HomeOutlinedIcon className="icon-navbar" />
        <DarkModeOutlinedIcon className="icon-navbar" />
        <GridViewOutlinedIcon className="icon-navbar" />
        <div className="search">
          <SearchOutlinedIcon className="icon-navbar" />
          <input type="text" placeholder="Tìm kiếm ..."></input>
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon className="icon-navbar" />
        <EmailOutlinedIcon className="icon-navbar" />
        <NotificationsOutlinedIcon className="icon-navbar" />
        <div className="user">
          <img src="https://static.independent.co.uk/2022/08/21/10/newFile-1.jpg?quality=75&width=982&height=726&auto=webp"></img>
          <span>Loc Pham</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
