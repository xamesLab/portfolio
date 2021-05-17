import React from "react";
import { Route } from "react-router";
import ContentHeader from "../../main_component/ContentHeader";
import GitLink from "../../main_component/GitLink";
import ArrayPage from "./Pages/ArrayPage";
import BoolPage from "./Pages/BoolPage";
import ObjPage from "./Pages/ObjPage";
import ProtoPage from "./Pages/ProtoPage";
import "./Reminder.css";
import Tabs from "./Tabs";

function Reminder() {
  return (
    <div className='wrap-memo'>
      <ContentHeader>{"Памятка JS"}</ContentHeader>

      <Tabs />
      <div className='reminder__page container_neu'>
        <Route path='/memo/array' component={ArrayPage} />
        <Route path='/memo/bool' component={BoolPage} />
        <Route path='/memo/obj' component={ObjPage} />
        <Route path='/memo/proto' component={ProtoPage} />
      </div>

      <GitLink text={"Памятка"}>
        {
          "https://github.com/xamesLab/portfolio/tree/main/src/components/Reminder"
        }
      </GitLink>
    </div>
  );
}

export default Reminder;
