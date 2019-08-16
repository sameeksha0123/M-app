import React, { Component } from "react";
import Select from "../DropDown/DropDown";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  location,
  timeSlot,
  TimeFormat,
  typeOfMetting
} from "../../containers/Dashboard/UserTab/ArrayData";
import "./BookingBlock.css";
import TimeInput from "material-ui-time-picker";
import moment from "moment";
import Timekeeper from "react-timekeeper";

// const useStyles = makeStyles(theme => ({
//   btn: {
//     margin: theme.spacing(1)
//   }
// }));

const meetingSlots = [15, 30, 45, 60, 75, 90];
const bookedSlotArray = [
  { startTime: "6:45 pm", endTime: "7:00 pm" },
  { startTime: "6:00 pm", endTime: "6:30 pm" }
];

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: true,
      time: new Date(),
      selectedDate: new Date(),
      setSelectedDate: "",
      updatedTime:''
    };
  }
  handleChange = time => {
    this.setState({ updatedTime: time });
    console.log("start Time", this.state.updatedTime);
    var selectedTime = this.state.updatedTime;
    console.log(moment(selectedTime).format("LT"));

    if (bookedSlotArray.find(item => item.startTime === this.state.time)) {
      //   this.setState({ availability: false });
      console.log("same time");
    } else {
      console.log("not same @@@@");
    }
  };
  handleDateChange = date => {
    this.setState({ setSelectedDate: date });
  };
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
  getSlot = (e, timeSlot) => {
    console.log("getslot", timeSlot);
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
    if (h > 12) {
      h = hh - 12;
      if (h != 10 || h != 11 || h != 12) {
        h = h;
      }
      dd = "pm";
    } else if ((h = 12)) {
      dd = "pm";
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
    // console.log("@@@@@@", h + ":" + m + " " + dd);
    var currentTime = h + ":" + m + " " + dd;
    var timeSlotArray = timeSlot.slice(timeSlot.indexOf(currentTime));

    var selectedStartTime = this.props.startTime;
    // console.log("####", selectedStartTime);
    // if (bookedSlotArray.find(item => item.startTime === selectedStartTime)) {
    //   //   this.setState({ availability: false });
    //   console.log("same time");
    // } else {
    //   console.log("not same @@@@");
    // }

    return (
      <Paper className="bookSlot-container">
        <div className="timePicker">
          <TimeInput
            mode="12h"
            value={this.state.time}
            onChange={ this.handleChange}
            placeholder="Start Time"
          />
          {/* <Timekeeper time={this.state.time} switchToMinuteOnHourSelect /> */}
        </div>
      </Paper>
    );
  }
}

//     return (
//       <Paper className="bookSlot-container">
//         <Select
//           label="Type of Meeting"
//           name={typeOfMetting}
//           action={"meetingType_action"}
//         />
//         <KeyboardTimePicker
//           margin="normal"
//           id="time-picker"
//           label="Time picker"
//           value={this.state.selectedDate}
//           onChange={this.handleDateChange}
//           KeyboardButtonProps={{
//             "aria-label": "change time"
//           }}
//         />
//         <div className="timeSlot-wrapper">
//           <Select
//             label="Start Time"
//             name={timeSlotArray}
//             action={"start_action"}
//           />
//           {/* <Select label="AM / PM" name={TimeFormat} action={"start_time_format"}/> */}
//           <div className="timeSlot-options">
//             {meetingSlots.map(item => (
//               <Button
//                 variant="contained"
//                 className={"slots"}
//                 value={item}
//                 color="primary"
//                 onClick={e => this.getSlot(e, item)}
//                 disabled
//               >
//                 {item}
//               </Button>
//             ))}
//           </div>
//           <Select
//             label="End Time"
//             name={timeSlotArray.slice(1)}
//             action={"end_action"}
//           />
//           {/* <Select label="AM / PM" name={TimeFormat} action={"end_time_format"}/> */}
//         </div>
//         {this.state.availability && <div> NOT AVAILABLE </div>}
//         <Button
//           variant="contained"
//           color="primary"
//           className="login-btn"
//           onClick={this.submitLogin}
//         >
//           BOOK
//         </Button>
//       </Paper>
//     );
//   }
// }

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
