import React from "react";
import dialogsCSS from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Massage/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const DialogsFormMessage = (props) => {
  return (
    <form className={dialogsCSS.dialogsItems} onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="dialogsFormTextarea"
          validate={[required, maxLength100]}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

const DialogsFormMessageReduxForm = reduxForm({ form: "dialogsMeaasage" })(
  DialogsFormMessage
);

const Dialogs = (props) => {
  const addMessage = (dataForm) => {
    props.addMessage(dataForm.dialogsFormTextarea);
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
        <DialogsFormMessageReduxForm onSubmit={addMessage} />
      </div>
    </>
  );
};

export default Dialogs;
