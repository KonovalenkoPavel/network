import React from "react";
import dialogsCSS from "./Message.module.css";

const Message = (props) => {
  return <div className={dialogsCSS.massage}>{props.text}</div>;
};

export default Message;
