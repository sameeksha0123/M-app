import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Office_box.css";

const office = props => {
  console.log("props of meeting room @@@@", props.availabitity);

  if (props.availabitity) {
    return (
      <div className="officeBox" onClick={props.click}>
        <Typography variant="h6" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Available
        </Typography>
      </div>
    );
  } else {
    return (
      <div className="officeBox occupied" onClick={props.click}>
        <Typography variant="h6" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          BOOKED
        </Typography>
      </div>
    );
  }
};
export default office;
