import React, { Component } from "react";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import Typography from "@material-ui/core/Typography";
import { Route, Link, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    console.log("RENDERED [HOME]");
    return (
      <div>
        <Typography variant="h3" gutterBottom>
          HOME PAGE
        </Typography>
        <Link to="/login" className="link">
          {" "}
          Just go to Login Page
        </Link>
      </div>
    );
  }
}

export default Home;
