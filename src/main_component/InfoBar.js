import React from "react";
import "./main.css";

function InfoBar() {
  return (
    <div className='container info-bar__info'>
      <div className='container__head'>
        <h4>Stack</h4>
      </div>
      <div className='info-bar'>
        <img src={"/images/main/atom.svg"} alt='альтернативный текст'></img>
        <img src={"/images/main/redux.png"} alt='альтернативный текст'></img>
        <img src={"/images/main/django.webp"} alt='альтернативный текст'></img>
        <img src={"/images/main/pytorch.svg"} alt='альтернативный текст'></img>
      </div>
    </div>
  );
}

export default InfoBar;
