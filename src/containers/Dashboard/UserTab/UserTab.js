import React, { Component } from "react";
import Select from "../../../component/DropDown/DropDown";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
// import Button from "@material-ui/core/Button";
import { Link, Route, withRouter } from "react-router-dom";
import BookBlock from "../../../component/BookingBlock/BookingBlock";
import Map from "../../../component/Map/MapOffice";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActions";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Admin from "../AdminTab/AdminTab";
// import { hIT9, hIT6 } from "./RoomallocationData";
import {
  location_action,
  startTime_action,
  endTime_action,
  meetingType_action
} from "../../../redux/actions/userAction";
import { bindActionCreators } from "redux";
import { location } from "./ArrayData";
import axios from "axios";
import "./UserTab.css";
import { Switch } from "@material-ui/core";

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
  locationSelected = (e, item) => {
    console.log("city seleted", item);
    this.props.location_action(item);
    this.props.history.push(`/location`);
  };
  render() {
    return (
      <div className="userTab-container">
        <Typography variant="h3" component="h2" gutterBottom>
          LOCATION
        </Typography>

        <div className="location-container">
          {location.map(item => {
            console.log("item", item);
            return (
              <Link to={`/location`}>
                <Card className="class-card">
                  <CardActionArea onClick={e => this.locationSelected(e, item)}>
                    <CardContent>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {item}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            );
          })}
        </div>
        {/* <div className="userTab--option_section">
          <Select
            label="Office Location"
            name={location}
            action={"location_action"}
          />
        </div> */}
        <div className="userTab_container-div">
          {this.props.location && (
            <div>
              <Map array={this.props.mapArray} />
            </div>
          )}
          <div />
          {/* <div style={{ background: "red", height: "200px" }} /> */}
          {/* <div className="mapFloor-container">
            {this.props.location && (
              //   <Link to={`/DashBoard/`}>
              <Map_H_IT_6
                location={this.props.location}
                mapOffice={this.props.mapDiv}
              />
              //   </Link>
            )}
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.userAct.location,
  mapArray: state.userAct.mapArray
  //   mapDiv: state.userAct.map,
  //   startTime: state.userAct.startTime,
  //   endTime: state.userAct.endTime,
  //   typeOfMeeting: state.userAct.typeOfMeeting,
  //   userTab: state.userAct
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      location_action
      //   startTime_action,
      //   endTime_action,
      //   meetingType_action
    },
    dispatch
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserTab)
);
