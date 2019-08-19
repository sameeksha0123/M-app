import React, { Component } from "react";
import Appbar from "../../component/Appbar/Appbar";
import Tab from "../../component/Tab/Tab";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SuperAdmin from "./SuperAdmin/SuperAdminTab";
import Admin from "./AdminTab/AdminTab";
import User from "./UserTab/UserTab";
import BookingBlock from "../../component/BookingBlock/BookingBlock";
import BookCard from '../../component/BookingBlock/BookCard/BookCard'
import MapOffice from "../../component/Map/MapOffice";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import classes from "classNames";
import "./Dashboard.css";

// const tabItems = [
//   { id: 1, label: "Item1", link: "User" },
//   { id: 2, label: "Item2", link: "Admin" },
//   { id: 3, label: "Item3", link: "SuperAdmin" }
// ];
class DashBoard extends Component {
  state = { auth: true };
  render() {
    const userType = this.props.login;

    return (
      <div>
        <Appbar />
        <Container maxWidth="md" className="tab-container">
          {/* <Tab tabInfo={tabItems} /> */}

          {/* <Box component="div" m={1} /> */}
          {/* {this.state.auth && <User />} */}
          <Switch>
            <Route path="/SuperAdmin" component={SuperAdmin} />
            <Route path="/User" component={User} />
            <Route path="/Admin" component={Admin} />
            <Route path={`/location`} component={MapOffice} />;
            <Route path={`/userinfo`} component={User} />;
            <Route path={`/bookSlot`} component={BookingBlock} />
            <Route path='/bookCard' component={BookCard}/>
            {/* // <Route path={`/DashBoard/bookSlot`} component={BookBlock} />; */}
          </Switch>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  login: state.login.loginUser
});
export default connect(mapStateToProps)(DashBoard);
