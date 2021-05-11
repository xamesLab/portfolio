import React from "react";

const SnakeFood = ({ food }) => {
  const style = {
    top: `${food[0]}rem`,
    left: `${food[1]}rem`,
  };
  return <div className='field__food' style={style}></div>;
};

export default SnakeFood;
