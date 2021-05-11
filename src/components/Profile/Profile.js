import React from "react";
import "./Profile.css";
//import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <div className='profile__header'>
      <img
        className='profile__foto'
        src={"images/main/foto.jpg"}
        alt='альтернативный текст'></img>
      <div>
        <h2>Евгений Ананьин</h2>
        <p>Москва</p>
      </div>
    </div>
  );
}

export default Profile;
