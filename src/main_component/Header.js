import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <h1>FrontEnd</h1>
      </div>
      <div className='header__home'>
        <NavLink exact to='/'>
          <img src={"/images/main/home.svg"} alt='home'></img>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
