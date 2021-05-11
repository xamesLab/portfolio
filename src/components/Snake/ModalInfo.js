import React from "react";

const ModalInfo = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal-info active" : "modal-info"}
      onClick={setActive}>
      <div
        className='modal-info__modal'
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className='modal-info__head'>
          <h2>info</h2>
        </div>
        <div className='modal-info__content'>
          <div className='modal-info__item'>
            <p>Старт/Стоп - 'space'</p>
            <img src={"images/main/button.svg"} alt={"space button"} />
          </div>
          <div className='modal-info__item'>
            <p>Влево/Вправо/Вверх/Вниз</p>
            <img src={"images/main/keyboard.svg"} alt={"arrow button"} />
          </div>
          <div className='modal-info__item'>
            <p>Перед стартом вы можете указать размер поля (широна\высота)</p>
            <img src={"images/main/input.png"} alt={"input"} />
          </div>
          <div className='modal-info__btn'>
            <button onClick={setActive}>ok</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
