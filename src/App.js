import React from "react";
import logo from "../src/assets/images/download.png";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Confirm from "./component/Confirm/Confirm_email";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard/Dashboard";
import SuperAdmin from "./containers/Dashboard/SuperAdmin/SuperAdminTab";
import Admin from "./containers/Dashboard/AdminTab/AdminTab";
import User from "./containers/Dashboard/UserTab/UserTab";

function App() {
  return (
    <div className="App">
      {/* <Route path='/' component={Home} /> */}
      {/* <img className="App-logo" src={logo} /> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/confirm/:id" exact component={Confirm} />
        <Route path="/newRegister" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      {/* <Switch>
        <Route path="/SuperAdmin" component={SuperAdmin} />
        <Route path="/User" component={User} />
        <Route path="/Admin" component={Admin} />
      </Switch> */}
    </div>
  );
}

export default App;
