import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <NavLink exact to='/'>
          <div className='header__text'>FRONTEND dev</div>
        </NavLink>
      </div>
      <div className='header__home'>
        <NavLink exact to='/'>
          <span className='material-icons-outlined'>home</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
