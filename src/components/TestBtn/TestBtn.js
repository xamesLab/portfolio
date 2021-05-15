import React from "react";
import "./TestBtn.css";

function TestBtn() {
  const clickButton = (e) => {
    e.currentTarget.classList.toggle("active");
    e.currentTarget.classList.toggle("off");
  };
  return (
    <div className='neu-wrap'>
      <div className='container_neu container_neu_around'>
        <button onClick={clickButton} className='neu__btn active fst'>
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
