import React from "react";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-item">
        <a href="#" className="master-card">
          <img src="public/images/mastercard-line.png" alt="" />
        </a>
        <a href="#">
          <img src="public/images/user.png" className="users" alt="" />
        </a>
        <hr className="line" />
        <a href="#">
          <img src="public/images/browse.png" alt="" className="browser" />
        </a>
        <a href="#">
          <img src="public/images/chats.png" className="chat" alt="" />
        </a>
        <a href="#">
          <img className="video-icon" src="public/images/video call.png" alt="" />
        </a>
        <a href="#">
          <img className="music-icon" src="public/images/music.png" alt="" />
        </a>
        <a href="#">
          <img className="more-icon" src="public/images/more.png" alt="" />
        </a>
      </div>

      <div className="extras">
        <a href="#">
          <img className="sett-icon" src="public/images/setting.png" alt="" />
        </a>
        <a href="#">
          <img className="log-icon" src="public/images/login.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Menu;
