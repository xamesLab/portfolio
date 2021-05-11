import React from "react";

const SnakeBody = (props) => {
  return (
    <div>
      {props.snakeCells.map((c, i) => {
        const style = {
          top: `${c[0]}rem`,
          left: `${c[1]}rem`,
        };
        return <div className='snake__cell' key={i} style={style}></div>;
      })}
    </div>
  );
};

export default SnakeBody;
