// карточка товара с 3D эффектом
// при наведении курсора на прозрачную подложку
// элементы карточки меняют свои стили
// изменяется z и наклон элементов относительно центральных осей x,y

import React, { useState } from "react";
import "./Card.css";
import Moto from "./moto";

function Card() {
  // список изображений подгружаемых в карточку
  const imgs = {
    blue: "/images/main/blue.webp",
    green: "/images/main/p.webp",
    black: "/images/main/bl.webp",
  };

  let [motoColor, setMotoColor] = useState(imgs.green);

  // ссылка на элемент для рассчета центральных осей
  const axis = React.createRef();

  // ссылки на элементы для стилизации
  const moto = React.createRef();
  const logo = React.createRef();
  const kawa = React.createRef();
  const btnsBlock = React.createRef();
  const submit = React.createRef();

  // установка угла наклона по осям
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  // обработка перемещения мыши
  const oMM = (e) => {
    // расчет осей
    let axisX = axis.current.offsetWidth + axis.current.offsetLeft;
    let axisY = axis.current.offsetHeight / 2 + axis.current.offsetTop;
    // изменение наклона
    axis.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    setY((axisY - e.pageY) / 18);
    setX((e.pageX - axisX) / 18);
  };

  // вход мыши на подложку
  const oME = (e) => {
    // сброс transition для быстрой реакции на перемещение мыши
    axis.current.style.transition = `none`;

    // изменение z
    moto.current.style.transform = `translateZ(110px) rotateZ(-20deg)`;
    logo.current.style.transform = `translateZ(80px)`;
    btnsBlock.current.style.transform = `translateZ(50px)`;
    submit.current.style.transform = `translateZ(80px)`;
    kawa.current.style.transform = `translateZ(40px)`;
  };

  // уход мыши с подложки
  const oML = (e) => {
    // установка плавного возвращения в исходное состояние
    axis.current.style.transition = `all 0.5s ease`;
    axis.current.style.transform = `rotateX(0deg) rotateY(0deg)`;

    // сброс z
    moto.current.style.transform = `translateZ(0px)`;
    logo.current.style.transform = `translateZ(0px)`;
    btnsBlock.current.style.transform = `translateZ(0px)`;
    submit.current.style.transform = `translateZ(0px)`;
    kawa.current.style.transform = `translateZ(0px)`;
  };

  // установка изображения по нажатию на кнопки
  const setColor = (e) => {
    let newColor = e.target.dataset.c;
    setMotoColor(imgs[newColor]);
    console.log(newColor);
  };

  return (
    <div
      className='wrap-card'
      onMouseMove={oMM}
      onMouseEnter={oME}
      onMouseLeave={oML}>
      <div className='card' ref={axis}>
        <div className='card__img'>
          <div className='card__circle'></div>
          <div ref={moto}>
            <Moto img={motoColor} />
          </div>
        </div>
        <div className='card__info'>
          <div className='card__logo'>
            <img src={"images/main/ninja.png"} alt='logo' ref={logo}></img>
          </div>
          <h3 ref={kawa}>kawasaki 300 ninja</h3>
          <div className='card__button' ref={btnsBlock}>
            <button data-c='green' onClick={setColor}>
              green
            </button>
            <button data-c='black' onClick={setColor}>
              black
            </button>
            <button data-c='blue' onClick={setColor}>
              blue
            </button>
          </div>
          <div className='card__sub' ref={submit}>
            <button>Заявка</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
