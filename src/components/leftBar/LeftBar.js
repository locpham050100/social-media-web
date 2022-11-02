/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./leftBar.scss";

import Friends from "./img/friends-icon.png";
import Groups from "./img/groups-icon.png";
import Market from "./img/marketplace-icon.png";
import Watch from "./img/watch-icon.png";
import Memories from "./img/memories-icon.png";
import Events from "./img/events-icon.png";
import Games from "./img/games-icon.png";
import Gallery from "./img/gallery-icon.png";
import Videos from "./img/videos-icon.png";
import Messages from "./img/messages-icon.png";
import Tutorial from "./img/tutorial-icon.png";
import Fundraiser from "./img/fundraiser-icon.png";
import Courses from "./img/courses-icon.png";

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://static.independent.co.uk/2022/08/21/10/newFile-1.jpg?quality=75&width=982&height=726&auto=webp"
              alt=""
            ></img>
            <span>Loc Pham</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Bạn bè</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Nhóm</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Kỷ niệm</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Lối tắt</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Sự kiện</span>
          </div>
          <div className="item">
            <img src={Games} alt="" />
            <span>Games</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Tin nhắn</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Khác</span>
          <div className="item">
            <img src={Fundraiser} alt="" />
            <span>Gây quỹ</span>
          </div>
          <div className="item">
            <img src={Tutorial} alt="" />
            <span>Hướng dẫn</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Khoá học</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
