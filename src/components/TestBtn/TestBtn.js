import React from "react";
import "./TestBtn.css";

function TestBtn() {
  const clickButton = (e) => {
    e.currentTarget.classList.toggle("on");
    e.currentTarget.classList.toggle("off");
  };
  return (
    <div className='neu-wrap'>
      Test block
      <div className='container_neu'>
        <button onClick={clickButton} className='neu__btn on fst'>
          <span>first</span>
        </button>
        <button onClick={clickButton} className='neu__btn off scnd'>
          <span>sc</span>
        </button>
      </div>
    </div>
  );
}

export default TestBtn;
