import React from "react";
import "./main.css";

function GitLink(props) {
  return (
    <div className='git-link bar_bg'>
      <p>Код на GitHub: </p>
      <a target='_blank' rel='noreferrer' href={props.children}>
        {props.text}
      </a>
    </div>
  );
}

export default GitLink;
