import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import ChatIcon from "src/assets/chaticon"

function Navbar() {
  return (
    <nav>
      <div className="right-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="12"
          viewBox="0 0 52 12"
          fill="none"
        >
          <circle cx="46" cy="6" r="6" fill="#5FCF65" />
          <circle cx="26" cy="6" r="6" fill="#F8CE52" />
          <circle cx="6" cy="6" r="6" fill="#F96057" />
        </svg>
        <a href="#" className="calender">
          <img src="public/images/chaticon.png" alt="" />
        </a>
        <div className="left-right-arrow">
          <a href="#">
            <img src="public/images/left arrow.png" alt="" />
          </a>
          <a href="#">
            <img src="public/images/right arrow.png" alt="" />
          </a>
        </div>
        <a href="#" className="shield">
          <img src="public/images/shield.png" alt="" />
        </a>
      </div>

      <div className="center-nav">
        <a href="" className="search-icon">
          <AiOutlineSearch />
        </a>
        <input type="text" placeholder="Search or enter website name" />
        <a href="#">
          <img src="public/images/search.png" className="refresh" />
        </a>
      </div>

      <div className="left-nav">
        <a href="#">
          <img src="public/images/upload.png" alt="" />
        </a>
        <a href="#">
          <img src="public/images/plus.png" alt="" />
        </a>
        <a href="#">
          <img src="public/images/copy.png" alt="" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
