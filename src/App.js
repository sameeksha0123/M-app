import React from "react";
import logo from "../src/assets/images/download.png";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Confirm from "./component/Confirm/Confirm_email";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Route path='/' component={Home} /> */}
      <img className="App-logo" src={logo} />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/confirm/:id" exact component={Confirm} />
        <Route path="/newRegister" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
