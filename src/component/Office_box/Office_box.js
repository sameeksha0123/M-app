import React from "react";
import "./Office_box.css";

const office = props => {
  return (
    <div className={"officeBox" } onClick={props.click}>
    {/* + available ? " " : " occupied"}> */}
      {props.name}
    </div>
  );
};
export default office;
