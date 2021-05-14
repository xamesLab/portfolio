import React from "react";
import { NavLink } from "react-router-dom";
import "./Reminder.css";

function Tabs() {
  let btnStyle = new Map([
    ["array", ["off", "array text"]],
    ["bool", ["off", "bool text"]],
    ["obj", ["off", "obj text"]],
    ["proto", ["off", "proto text"]],
  ]);

  let item = [];

  for (let i of btnStyle) {
    item.push(
      <NavLink
        className={`tabs__btn neu__btn ${i[1][0]}`}
        key={i[0]}
        to={`/memo/${i[0]}`}>
        {i[1][1]}
      </NavLink>
    );
  }

  return <div className='tabs container_neu'>{item}</div>;
}

export default Tabs;
