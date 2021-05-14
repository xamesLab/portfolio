import React from "react";
import { Route } from "react-router";
import ContentHeader from "../../main_component/ContentHeader";
import ArrayPage from "./Pages/ArrayPage";
import "./Reminder.css";
import Tabs from "./Tabs";

function Reminder() {
  return (
    <div className='wrap-memo'>
      <ContentHeader>{"Памятка JS"}</ContentHeader>
      <Tabs />
      <div className='reminder__page container_neu'>
        <Route path='/memo/array' component={ArrayPage} />
      </div>
    </div>
  );
}

export default Reminder;
