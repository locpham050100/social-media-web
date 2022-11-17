/* eslint-disable jsx-a11y/alt-text */
import { React, useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Vitus</span>
        </Link>
        <HomeOutlinedIcon className="icon-navbar" />
        {darkMode ? (
          <WbSunnyOutlinedIcon className="icon-navbar" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className="icon-navbar" onClick={toggle} />
        )}
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
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
