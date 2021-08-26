import React from "react";
import "./main.css";

function InfoBar() {
  return (
    <div className="container info-bar__info">
      <div className="container__head">
        <h4>Стэк</h4>
      </div>
      <div className="info-bar">
        <div className="info-bar__img">
          <img src={"images/main/atom.svg"} alt="react"></img>
        </div>
        <div className="info-bar__img">
          <img src={"images/main/css.png"} alt="css3"></img>
        </div>
        <div className="info-bar__img">
          <img src={"images/main/es6.png"} alt="es6"></img>
        </div>

        <div className="info-bar__img">
          <img src={"images/main/html.png"} alt="html5"></img>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
