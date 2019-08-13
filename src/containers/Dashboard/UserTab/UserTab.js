import React, { Component } from "react";
import Select from "../../../component/DropDown/DropDown";
import { connect } from "react-redux";
// import Button from "@material-ui/core/Button";
import { Link, Route } from "react-router-dom";
import BookBlock from "../../../component/BookingBlock/BookingBlock";
import Map_H_IT_6 from "../../../component/Map/Map_H_IT_6";
// import { hIT9, hIT6 } from "./RoomallocationData";
import { location, timeSlot, TimeFormat, typeOfMetting } from "./ArrayData";
import axios from "axios";
import "./UserTab.css";

class UserTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: false,
      meetingType: false,
      timeSlot: "",
      bookingStatus: false
    };
  }

  checkbookingStatus = () => {
    if (this.props.location && this.props.startTime && this.props.endTime) {
      this.setState({ bookingStatus: true });
      console.log(
        "****",
        this.props.location,
        this.props.startTime,
        this.props.endTime,
        this.props.meetingType
      );
      return true;
      //   console.log("****", this.state.bookingStatus);
    }
  };
  submitLogin = e => {
    e.preventDefault();
    // this.current_location();
    var isValidate = this.checkbookingStatus();
    if (isValidate) {
      axios
        .post(
          `https://test-urls-generation.firebaseio.com/${
            this.props.mapDiv
          }.json`,
          this.props.userTab
        )
        .then(res => {
          console.log("ID-generated", res.data.name);
          console.log("response hit", res.config.data);
        });
    } else {
      console.log("Booking unavailable");
    }
  };
  render() {
    // console.log("@@##@@", timeSlotArray.slice(1));

    // console.log("UserTab", this.props.location);
    // console.log("map", this.props.mapDiv);
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
        <div className="userTab--option_section">
          <Select
            label="Office Location"
            name={location}
            action={"location_action"}
          />
        </div>
        <div className="userTab_container-div">
          <div />
          {/* <div style={{ background: "red", height: "200px" }} /> */}
          <div className="mapFloor-container">
            {this.props.location && (
              <Link to={`/DashBoard/${this.props.location}`}>
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
  mapDiv: state.userAct.map,
  startTime: state.userAct.startTime,
  endTime: state.userAct.endTime,
  typeOfMeeting: state.userAct.typeOfMeeting,
  userTab: state.userAct
});
export default connect(mapStateToProps)(UserTab);
