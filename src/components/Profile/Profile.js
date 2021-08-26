import React, { useState } from "react";
import ModalInfo from "../Snake/ModalInfo";
import "./Profile.css";
//import { NavLink } from "react-router-dom";

function Profile() {
  let [modal, setModal] = useState(false);

  const toggleModal = (e) => {
    e.target.blur();
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  };
  return (
    <div className="wrap-profile">
      <div className="profile__header">
        <img
          className="profile__foto bar_bg"
          src={"images/main/photo.png"}
          alt="альтернативный текст"
        ></img>
        <div>
          <p>(портфолио)</p>
          <h2>Евгений Ананьин</h2>
          <p>16.06.1987г.</p>
          <p>Москва</p>
        </div>
      </div>
      <div className="profile__main">
        <div className="profile__contacts">
          <div className="contacts-block bar_bg">
            <ul className="profile__links">
              <li>
                <img src={"images/icons/telegram.svg"} alt="telegram"></img>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://tlgg.ru/@xamchief"
                >
                  @xamchief
                </a>
              </li>
              <li>
                <img src={"images/icons/vk.svg"} alt="vk"></img>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vk.com/id471610781"
                >
                  id471610781
                </a>
              </li>
              <li>
                <img src={"images/icons/linkedin.svg"} alt="linkedin"></img>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/evgeniian"
                >
                  evgeniian
                </a>
              </li>
              <li>
                <img src={"images/icons/github.svg"} alt="github"></img>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/xamesLab"
                >
                  xamesLab
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile__content">
          <div className="profile__about">
            <h3>О себе:</h3>
          </div>
          <div className="profile__summary">
            <p>Начинающий фронтэнд разработчик.</p>
          </div>
          <div className="profile__skills">
            <p>
              Опыт разработки: боты для мессенджеров, торговые роботы и
              аналитика для криптобирж, отбор данных по API и Websocket, парсинг
              данных из вэб, нейросети, разработка на React и чистом JS.
            </p>
            <p>
              Используемые навыки: JS/ES6, React, Redux, БЭМ, Python, PyTorch,
              Django, Git.
            </p>
          </div>
          <div className="profile__info">
            <button className="profile__btn bar_bg" onClick={toggleModal}>
              о сайте
            </button>
          </div>
        </div>
      </div>
      <ModalInfo className="modal" active={modal} setActive={toggleModal}>
        <p className="modal__item">
          Сайт разработан на библиотеке React. Весь код написан лично автором.
        </p>
        <p className="modal__item">
          Сайт создан в качестве портфолио и дорабатывается. Если вам попался
          баг, значит я до него еще не добрался.
        </p>
        <p className="modal__item">
          В процессе проработки находится "адаптивнось" и "кроссбраузерность".{" "}
          <i>Существуют проблемы с отображением в браузере Safari.</i>
        </p>
        <p className="modal__item">
          Дизайн сайта не претендует на овации, а просто "чтобы был", отложен в
          "долгий ящик"
        </p>
      </ModalInfo>
    </div>
  );
}

export default Profile;
