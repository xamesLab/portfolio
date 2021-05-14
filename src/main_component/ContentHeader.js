import React from "react";
import "./main.css";

const ContentHeader = (props) => {
  return (
    <div className='content-header'>
      <h2 className='content-header__title'>{props.children}</h2>
    </div>
  );
};

export default ContentHeader;
