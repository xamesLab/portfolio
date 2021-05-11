import React from "react";
import { Route } from "react-router";
import Card from "../components/Card/Card";
import Graph from "../components/Graph/Graph";
import Profile from "../components/Profile/Profile";
import Reminder from "../components/Reminder/Reminder";
import Snake from "../components/Snake/Snake";
import "./main.css";

function Content() {
  return (
    <div className='container content'>
      <Route exact path='/' component={Profile} />
      <Route path='/card3D' component={Card} />
      <Route path='/graph' component={Graph} />
      <Route path='/memo' component={Reminder} />
      <Route path='/snake' component={Snake} />
    </div>
  );
}

export default Content;
