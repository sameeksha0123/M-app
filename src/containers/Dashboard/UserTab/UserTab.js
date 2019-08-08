import React, { Component } from "react";
import Select from "../../../component/DropDown/DropDown";
import { connect } from "react-redux";
import Map from "../../../component/Map/Map_H_IT_6";

const location = [
  "Ahmedabad",
  "Bangalore",
  "Nodia",
  "Dadar",
  "Prabhadevi-Busines Arcade (10 th Floor)",
  "Prabhadevi-Busines Arcade (9 th Floor)",
  "Prabhadevi-Busines Arcade (8 th Floor)",
  "Rabale-Sigma IT Park(5th Floor)",
  "Rabale-Sigma IT Park(9th Floor)",
  "Hinjewadi-NPTL SEZ IT 6",
  "Hinjewadi-NPTL SEZ IT 9",
  "Onsite",
  "Work From Home"
];
const typeOfMetting = ["Client Call", "Interview", "StandUp"];
const timeSlot = [
  "12:00 ",
  "12:15 ",
  "12:30 ",
  "12:45 ",
  "01:00 ",
  "01:15 ",
  "01:30 ",
  "01:45 ",
  "02:00 ",
  "02:15 ",
  "02:30 ",
  "02:45 ",
  "03:00 ",
  "03:15 ",
  "03:30 ",
  "03:45 ",
  "04:00 ",
  "04:15 ",
  "04:30 ",
  "04:45 ",
  "05:00 ",
  "05:15 ",
  "05:30 ",
  "05:45 ",
  "06:00 ",
  "06:15 ",
  "06:30 ",
  "06:45 ",
  "07:00 ",
  "07:15 ",
  "07:30 ",
  "07:45 ",
  "08:00 ",
  "08:15 ",
  "08:30 ",
  "08:45 ",
  "09:00 ",
  "09:15 ",
  "09:30 ",
  "09:45 ",
  "10:00 ",
  "10:15 ",
  "10:30 ",
  "10:45 ",
  "10:00 ",
  "10:15 ",
  "10:30 ",
  "10:45 ",
  "11:00 ",
  "11:15 ",
  "11:30 ",
  "11:45 "
];
const TimeFormat = ["am", "pm"];
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
    return (
      <div className="">
        UserTab
        <div className="">
          <Select label="Office Location" name={location} />
          <Select label="Type of Meeting" name={typeOfMetting} />
          <Select label="Time" name={timeSlot} />
          <Select label="AM / PM" name={TimeFormat} />
        </div>
        <div />
        {this.props.location && <Map />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.userAct.location
});
export default connect(mapStateToProps)(UserTab);
