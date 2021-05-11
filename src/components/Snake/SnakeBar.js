import React from "react";

const SnakeBar = ({ start, stop, modal, fieldXY, setFieldX, setFieldY }) => {
  return (
    <div className='snake__bar'>
      <div>
        <span>размер поля (5 - 30): </span>
        <input type='text' onChange={setFieldX} value={fieldXY[0]}></input>
        <input type='text' onChange={setFieldY} value={fieldXY[1]}></input>
      </div>
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={modal}>info</button>
      </div>
    </div>
  );
};

export default SnakeBar;
