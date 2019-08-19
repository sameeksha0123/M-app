import React, { Component } from "react";
// import Select from "../DropDown/DropDown";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";
import { timeSlot } from "../../containers/Dashboard/UserTab/ArrayData";
import "./BookingBlock.css";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { meetingType_action } from "../../redux/actions/userAction";

// import TimeInput from "material-ui-time-picker";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Link, Route } from "react-router-dom";
import moment from "moment";
import { bindActionCreators } from "redux";
// import Timekeeper from "react-timekeeper";

// const useStyles = makeStyles(theme => ({
//   btn: {
//     margin: theme.spacing(1)
//   }
// }));

const meetingSlots = [15, 30, 45, 60, 75, 90];
const bookedSlotArray = [
  { startTime: "6:45 PM", endTime: "7:00 PM" },
  { startTime: "6:00 PM", endTime: "6:30 PM" }
];

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availability: true,
      time: new Date(),
      selectedDate: new Date(),
      setSelectedDate: "",
      updatedTime: "",
      time2: new Date(),
      time3: new Date(),
      diff: 0,
      value: "Client Call"
    };
  }
  //   handleChange = time => {
  //     this.setState({ time }, () => {
  //       console.log("Hello", this.state.time);
  //       var selectedTime = this.state.time;
  //       console.log(moment(selectedTime).format("LT"));
  //       console.log("~~", bookedSlotArray);
  //       if (bookedSlotArray.find(item => item.startTime === this.state.time)) {
  //         //   this.setState({ availability: false });

  //         console.log("same time");
  //       } else {
  //         console.log("not same @@@@");
  //       }
  //     });
  //     console.log("start Time", this.state.updatedTime);

  //     if (bookedSlotArray.find(item => item.startTime === this.state.time)) {
  //       //   this.setState({ availability: false });
  //       console.log("same time");
  //     } else {
  //       console.log("not same @@@@");
  //     }
  //   };

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
    var startTime = moment(this.state.time2);
    var date = moment(startTime).add(timeSlot, "minutes");

    this.setState({ time3: date, diff: timeSlot });
  };
  handleChangeTime1 = e => {
    this.setState({ time2: e }, () => console.log(this.state.time2));
  };
  handleChangeTime2 = e => {
    this.setState({ time3: e }, () => console.log(this.state.time3));
  };
  handleChangeRadio = e => {
    this.setState({ value: e.target.value }, () =>
      console.log("meeting type", this.state.value)
    );
    this.props.meetingType_action(e.target.value);
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

    const startTime = moment(this.state.time2).format("LT");
    const endTime = moment(this.state.time3).format("LT");
    console.log("time", startTime, endTime);
    // var duration = moment.duration(endTime.diff(startTime));
    // console.log("diff", duration);
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Paper className="bookSlot-wrapper">
          {/* <div className="timePicker">
            <TimeInput
              mode="12h"
              value={this.state.time}
              onChange={time => this.handleChange(time)}
              // initialTime={new Date()}
              placeholder="Start Time"
            /> */}
          <div className="bookSlot-container">
            Material ui time KeyboardTimePicker
            <div className="selectTime-slot-container">
              <KeyboardTimePicker
                margin="normal"
                id="Start-Time"
                label="Start-Time"
                value={this.state.time2}
                onChange={this.handleChangeTime1}
                KeyboardButtonProps={{
                  "aria-label": "change time"
                }}
              />
              <div className="difference-time">{this.state.diff} mins</div>
              <div>
                <KeyboardTimePicker
                  margin="normal"
                  id="end-time"
                  label="end-time"
                  value={this.state.time3}
                  //   onChange={this.handleChangeTime2}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </div>
            </div>
            {/* <Timekeeper time={this.state.time} switchToMinuteOnHourSelect /> */}
            {/* </div> */}
            <div className="timeSlot-options">
              {meetingSlots.map(item => (
                <Button
                  variant="contained"
                  className={"slots"}
                  value={item}
                  color="primary"
                  onClick={e => this.getSlot(e, item)}
                >
                  {item}
                </Button>
              ))}
            </div>
            <Divider />
            <div className="select-meetingType-container">
              <FormControl>
                <FormLabel component="legend">Meeting Type</FormLabel>
                <RadioGroup
                  aria-label="meetingType"
                  name="meetingType"
                  value={this.state.value}
                  onChange={this.handleChangeRadio}
                >
                  <FormControlLabel
                    value="Client Call"
                    control={<Radio />}
                    label="Client Call"
                  />
                  <FormControlLabel
                    value="StandUp"
                    control={<Radio />}
                    label="StandUp"
                  />
                  <FormControlLabel
                    value="Interview"
                    control={<Radio />}
                    label="Interview"
                  />
                  {/* <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          /> */}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <br />
          <div className="book-btn-container">
            <Link className="officeLink" to={`/bookCard`}>
              <Button
                variant="contained"
                className={"book-btn"}
                color="primary"
              >
                BOOK
                {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon>send</Icon>
              </Button>
            </Link>
          </div>
        </Paper>
      </MuiPickersUtilsProvider>
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
  //   mapDiv: state.userAct.map,
  //   startTime: state.userAct.startTime,
  //   endTime: state.userAct.endTime,
  //   typeOfMeeting: state.userAct.typeOfMeeting,
  userTab: state.userAct
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      meetingType_action
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);

// import React from "react";

// const book = props => {
//   return <h1>Hello</h1>;
// };
// export default book;
