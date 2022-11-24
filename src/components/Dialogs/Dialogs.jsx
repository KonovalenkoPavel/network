import React from "react";
import dialogsCSS from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Massage/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  const addMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };

  if (!props.isAuth) return <Redirect to="/login" />;
  return (
    <>
      <div className={dialogsCSS.dialogs}>
        <div className={dialogsCSS.dialogsItems}>
          {props.dialogPage.dialog.map((dialogText) => {
            return (
              <Dialog
                key={dialogText.id}
                id={dialogText.id}
                name={dialogText.name}
              />
            );
          })}
        </div>
        <div className={dialogsCSS.massages}>
          {props.dialogPage.message.map((message) => {
            return (
              <Message
                key={message.id}
                text={message.message}
                id={message.id}
              />
            );
          })}
        </div>
        <div className={dialogsCSS.dialogsItems}>
          <div>
            <textarea
              value={props.dialogPage.newMessageText}
              onChange={(e) => onMessageChange(e)}
            ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
