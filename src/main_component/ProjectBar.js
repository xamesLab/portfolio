import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

function ProjectBar() {
  return (
    <div className='container project'>
      <div className='container__head'>
        <h4>Projects</h4>
      </div>
      <div className='project__bar'>
        <ul>
          <li>
            <NavLink to='/card3D'>Карточка товара</NavLink>
          </li>
          <li>
            <NavLink to='/graph'>Граф</NavLink>
          </li>
          <li>
            <NavLink to='/memo'>Памятка</NavLink>
          </li>
          <li>Тетрис</li>
          <li>
            <NavLink to='/snake'>Змейка</NavLink>
          </li>
          <li>
            <NavLink to='/calc'>Калькулятор</NavLink>
          </li>
          <li>test</li>
          <li>test2</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectBar;
