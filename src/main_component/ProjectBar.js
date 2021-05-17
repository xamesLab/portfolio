import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

function ProjectBar() {
  return (
    <div className='container project'>
      <div className='container__head'>
        <h4>Проекты</h4>
      </div>
      <div className='project__bar'>
        <ul>
          <li>
            <NavLink className='project__link' to='/card3D'>
              Карточка товара
            </NavLink>
          </li>
          <li>
            <NavLink className='project__link' to='/graph'>
              Обход графа
            </NavLink>
          </li>
          <li>
            <NavLink className='project__link' to='/memo'>
              Памятка JS
            </NavLink>
          </li>
          <li>
            <NavLink className='project__link' to='/snake'>
              Змейка
            </NavLink>
          </li>
          <li>
            <NavLink className='project__link' to='/calc'>
              Калькулятор
            </NavLink>
          </li>
          <li>
            <NavLink className='project__link' to='/btn'>
              Неоморфизм
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectBar;
