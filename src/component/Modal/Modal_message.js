import React from "react";
import "./Modal_message.css";

const Modal = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName} onClick={props.clicked}>
      <section className="modal-main">
        <img src={props.image} />
        <h2> {props.children}</h2>
      </section>
    </div>
  );
};
export default Modal;
