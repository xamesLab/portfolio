import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <h1>FrontEnd</h1>
      </div>
      <NavLink exact to='/'>
        Main page
      </NavLink>
    </div>
  );
}

export default Header;
