import React from "react";
import "./main.css";

function LinkBar() {
  return (
    <div className='container info-bar__link'>
      <div className='container__head'>
        <h4>Ссылки</h4>
      </div>
      <div className='info-bar'>
        <a
          className='info-bar__img'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/xamesLab/portfolio'>
          <img src={"/images/main/github.svg"} alt='github'></img>
        </a>
        <a
          className='info-bar__img'
          target='_blank'
          rel='noreferrer'
          href='https://tlgg.ru/@xamchief'>
          <img src={"/images/main/telegram.svg"} alt='trlrgram'></img>
        </a>
        <a
          className='info-bar__img'
          target='_blank'
          rel='noreferrer'
          href='https://linkedin.com/in/evgeniian'>
          <img src={"/images/main/linkedin.svg"} alt='linkedin'></img>
        </a>
        <a
          className='info-bar__img'
          target='_blank'
          rel='noreferrer'
          href='https://vk.com/id471610781'>
          <img src={"/images/main/vk.svg"} alt='vk'></img>
        </a>
      </div>
    </div>
  );
}

export default LinkBar;
