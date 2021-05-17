import React from "react";
import "./Profile.css";
//import { NavLink } from "react-router-dom";

function Profile() {
  return (
    <div className='wrap-profile'>
      <div className='profile__header'>
        <img
          className='profile__foto bar_bg'
          src={"images/main/photo.png"}
          alt='альтернативный текст'></img>
        <div>
          <p>(портфолио)</p>
          <h2>Евгений Ананьин</h2>
          <p>16.06.1987г.</p>
          <p>Москва</p>
        </div>
      </div>
      <div className='profile__main'>
        <div className='profile__contacts'>
          <div className='contacts-block bar_bg'>
            <ul className='profile__links'>
              <li>
                <img src={"/images/icons/telegram.svg"} alt='telegram'></img>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://tlgg.ru/@xamchief'>
                  @xamchief
                </a>
              </li>
              <li>
                <img src={"/images/icons/vk.svg"} alt='vk'></img>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://vk.com/id471610781'>
                  id471610781
                </a>
              </li>
              <li>
                <img src={"/images/icons/linkedin.svg"} alt='linkedin'></img>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://linkedin.com/in/evgeniian'>
                  evgeniian
                </a>
              </li>
              <li>
                <img src={"/images/icons/github.svg"} alt='github'></img>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/xamesLab'>
                  xamesLab
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='profile__content'>
          <div className='profile__summary'>summary</div>
          <div className='profile__skills'>key skills</div>
          <div className='profile__info'>доп инфо</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
