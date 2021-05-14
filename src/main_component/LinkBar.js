import React from "react";
import "./main.css";

function LinkBar() {
  return (
    <div className='container info-bar__link'>
      <div className='container__head'>
        <h4>link</h4>
      </div>
      <div className='info-bar'>
        <img src={"/images/main/github.svg"} alt='альтернативный текст'></img>
        <img src={"/images/main/vk.svg"} alt='альтернативный текст'></img>
        <img src={"/images/main/linkedin.svg"} alt='альтернативный текст'></img>
        <img src={"/images/main/telegram.svg"} alt='альтернативный текст'></img>
      </div>
    </div>
  );
}

export default LinkBar;
