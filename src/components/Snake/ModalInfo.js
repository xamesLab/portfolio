import React from "react";

const ModalInfo = (props) => {
  return (
    <div
      className={props.active ? "modal-info active" : "modal-info"}
      onClick={props.setActive}>
      <div
        className='modal-info__modal'
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className='modal-info__head'>
          <h2>info</h2>
        </div>
        <div className='modal-info__content'>
          {props.children}
          <div className='modal-info__btn'>
            <button onClick={props.setActive}>ok</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
