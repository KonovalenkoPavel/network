import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
  };
};
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsConteiner = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

// export default DialogsConteiner;
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
