import React, { Component } from "react";
import DropDown from "../DropDown/DropDown";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import axios from "axios";
// import Moment from 'react-moment';
import * as moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import {
  location,
  timeSlot,
  TimeFormat,
  typeOfMetting
} from "../../containers/Dashboard/UserTab/ArrayData";
import "./BookingBlock.css";

// const useStyles = makeStyles(theme => ({
//   btn: {
//     margin: theme.spacing(1)
//   }
// }));

const meetingSlots = [15, 30, 45, 60, 75, 90];
const bookedSlotArray = [
  { startTime: "10:45 am", endTime: "11:00 am" },
  { startTime: "2:45 pm", endTime: "3:30 pm" },
  { startTime: "3:30 pm", endTime: "3:45 pm" },
  { startTime: "6:45 pm", endTime: "7:00 pm" },
  { startTime: "6:00 pm", endTime: "6:30 pm" }
];

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: true,
      endTime: ""
    };
  }

  //   componentWillReceiveProps(nextProps) {
  //     console.log("comp receive props", nextProps);
  //     if (bookedSlotArray.find(item => item.startTime === nextProps)) {
  //       this.setState({ availability: false });
  //       console.log("not available");
  //     } else {
  //       console.log("component receiveProps", this.state.availability, "@@@@");
  //     }
  //   }
  //   componentDidUpdate(nextProps, nextState) {
  //     //if selected starttime is in booked array
  //     if (bookedSlotArray.find(item => item.startTime === !nextProps)) {
  //       console.log("returning true");
  //       return true;
  //     } else console.log("returning false");
  //   }
  //   componentWillUpdate() {
  //     console.log("wiilupdate called");
  //     this.setState({ availability: false });
  //   }

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
  handleDateChange=()={
      
  }
  getSlot = (e, bufferValue) => {
    //  console.log("getslot", timeSlot);
    this.setState({ endTime: bufferValue });
    // var timeSlotArray = timeSlot.slice(timeSlot.indexOf(currentTime));
    console.log("st", this.props.startTime);
    var st = this.props.startTime;
    console.log("arr", timeSlot);
    var timeSlotArray = timeSlot.slice(timeSlot.indexOf(st), 7);
    switch (bufferValue) {
      case 15:
        console.log("end-time", timeSlotArray);

        return {
          // timeSlotArray = timeSlot.slice(timeSlot.indexOf(currentTime))
        };
      case 30:
        console.log("end-time", timeSlotArray);
    }
    console.log("@@33@@", this.state);
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
    // const classes = useStyles();

    var t = new Date();
    var hh = t.getHours();
    var mm = t.getMinutes();
    var dd = "am";
    var h = hh;
    var m = mm;
    if (h >= 12) {
      h = hh - 12;
      dd = "pm";
    } else if (h < 12) {
      dd = "am";
    } else {
      dd = "am";
    }
    if (m < 15 && m >= 0) {
      m = 15;
    } else if (m < 30 && m >= 15) {
      m = 30;
    } else if (m < 45 && m >= 30) {
      m = 45;
    } else if (m < 60 && m >= 45) {
      h = h + 1;
      m = "00";
    }
    console.log("@@@@@@", h + ":" + m + " " + dd);
    var currentTime = h + ":" + m + " " + dd;
    var timeSlotArray = timeSlot.slice(timeSlot.indexOf(currentTime));
    var endtimeSlotArray = timeSlotArray.slice(2, 8);
    console.log("end time", endtimeSlotArray);
    var selectedStartTime = this.props.startTime;
    var selectedEndTime = this.props.endTime;
    let nextDiv = <div className="">SELECT TIME</div>;
    // if (bookedSlotArray.find(item => item.startTime === selectedEndTime)) {
    //   nextDiv2 = (
    //     <div className="not-available-msg">Already booked for this time</div>
    //   );
    // } else {
    //   nextDiv2 = (
    //     <div className="timeSlot-options">
    //       {meetingSlots.map((item, index) => (
    //         <Button
    //           variant="contained"
    //           className={"slots"}
    //           key={index}
    //           value={item}
    //           color="primary"
    //           onClick={e => this.getSlot(e, item)}
    //           // disabled={this.state.availability}
    //         >
    //           {item}
    //         </Button>
    //       ))}
    //     </div>
    //   );
    // }
    if (bookedSlotArray.find(item => item.startTime === selectedStartTime)) {
      nextDiv = (
        <div className="not-available-msg">Already booked for this time</div>
      );
    } else {
      nextDiv = (
        <div>
          <div className="timeSlot-options">
            {meetingSlots.map((item, index) => (
              <Button
                variant="contained"
                className={"slots"}
                key={index}
                value={item}
                color="primary"
                onClick={e => this.getSlot(e, item)}
                // disabled={this.state.availability}
              >
                {item}
              </Button>
            ))}
          </div>
          {/* {endTime} */}
          <div>{this.state.endTime}</div>
        </div>
      );
    }
    //  {
    //   console.log("not available");
    // }

    return (
      <Paper className="bookSlot-container">
        <DropDown
          label="Type of Meeting"
          name={typeOfMetting}
          action={"meetingType_action"}
        />
        <div className="timeSlot-wrapper">
          <DropDown
            label="Start Time"
            name={timeSlotArray}
            action={"start_action"}
            onClick={() => this.getdropValue()}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
          {this.props.startTime && nextDiv}
          {/* {this.props.startTime && this.props.endTime && nextDiv2} */}
          {/* <Select label="AM / PM" name={TimeFormat} action={"start_time_format"}/> */}
        </div>
      </Paper>
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
export default connect(mapStateToProps)(Book);

// import React from "react";

// const book = props => {
//   return <h1>Hello</h1>;
// };
// export default book;
