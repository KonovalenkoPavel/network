import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthTC } from "../../redux/auth-reducer";

class HeaderConteiner extends React.Component {
  componentDidMount() {
    this.props.setAuthTC();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthTC })(HeaderConteiner);
