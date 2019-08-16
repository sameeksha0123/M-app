import React, { Component } from "react";
import Select from "../../../component/DropDown/DropDown";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Map_H_IT_6 from "../../../component/Map/Map_H_IT_6";
import { location, timeSlot, TimeFormat, typeOfMetting } from "./ArrayData";
import "./UserTab.css";

class UserTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      meetingType: false,
      timeSlot: ""
    };
  }

  render() {
    console.log("UserTab", this.props.location);
    console.log("map", this.props.mapDiv);
    // const mapDiv = this.props.mapDiv;
    // function showMap() {
    //   var map = this.props.mapDiv;
    //   switch (map) {
    //     case "Map_H_IT_6":
    //       return <Map_H_IT_6 demo={"it6"} location={"Mumbai"} />;
    //       break;
    //     case "Map_H_IT_9":
    //       return <Map_H_IT_9 />;
    //     default:
    //       return;
    //   }
    // }
    return (
      <div className="userTab-container">
        UserTab
        <div className="userTab_container-div">
          <div className="userTab--option_section">
            <Select
              label="Office Location"
              name={location}
              action={"location_action"}
            />
          </div>
          <div className="mapFloor-container">
            {this.props.location && (
              <Link to={`/DashBoard/`}>
                <Map_H_IT_6
                  location={this.props.location}
                  mapOffice={this.props.mapDiv}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.userAct.location,
  mapDiv: state.userAct.map
});
export default connect(mapStateToProps)(UserTab);
