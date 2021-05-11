import React, { useState } from "react";
import "./Card.css";

function Card() {
  const axis = React.createRef();

  const moto = React.createRef();
  const logo = React.createRef();
  const btnsBlock = React.createRef();
  const submit = React.createRef();

  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  const oMM = (e) => {
    let axisX = axis.current.offsetWidth + axis.current.offsetLeft;
    let axisY = axis.current.offsetHeight / 2 + axis.current.offsetTop;
    axis.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    setY((axisY - e.pageY) / 18);
    setX((e.pageX - axisX) / 18);
  };

  const oME = (e) => {
    axis.current.style.transition = `none`;

    moto.current.style.transform = `translateZ(110px) rotateZ(-20deg)`;
    logo.current.style.transform = `translateZ(80px)`;
    btnsBlock.current.style.transform = `translateZ(50px)`;
    submit.current.style.transform = `translateZ(80px)`;
  };

  const oML = (e) => {
    axis.current.style.transition = `all 0.5s ease`;
    axis.current.style.transform = `rotateX(0deg) rotateY(0deg)`;

    moto.current.style.transform = `translateZ(0px)`;
    logo.current.style.transform = `translateZ(0px)`;
    btnsBlock.current.style.transform = `translateZ(0px)`;
    submit.current.style.transform = `translateZ(0px)`;
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
          <img src={"images/main/p.png"} alt='moto' ref={moto}></img>
        </div>
        <div className='card__info'>
          <div className='card__logo'>
            <img src={"images/main/ninja.png"} alt='logo' ref={logo}></img>
          </div>
          <h3>kawasaki 300 ninja</h3>
          <div className='card__button' ref={btnsBlock}>
            <button className='active'>green</button>
            <button>black</button>
            <button>blue</button>
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
