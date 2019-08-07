import React, { Component } from "react";
import ModalMessage from "../Modal/Modal_message";
import emailImg from "../../assets/images/emailImg.png";

class ConfirmMail extends Component {
  // this.state={
  //     show :true
  // }
  render() {
    console.log("props in confirm", this.props);
    return (
      <ModalMessage {...this.props} image={emailImg}>
        Email has been send to you
      </ModalMessage>
    );
  }
}
export default ConfirmMail;
