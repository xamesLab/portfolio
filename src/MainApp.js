import React from "react";
import { HashRouter } from "react-router-dom";
import Content from "./main_component/Content";
import Header from "./main_component/Header";
import InfoBar from "./main_component/InfoBar";
import LinkBar from "./main_component/LinkBar";
import ProjectBar from "./main_component/ProjectBar";

function MainApp() {
  //routing
  return (
    <HashRouter>
      <div className="main">
        <Header />
        <div className="main__content">
          <InfoBar />
          <LinkBar />

          <Content />
          <ProjectBar />
        </div>
        <div className="main__footer">&copy; xamesLab 2021</div>
      </div>
    </HashRouter>
  );
}

export default MainApp;
