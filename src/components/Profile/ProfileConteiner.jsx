import {
  setProfileTC,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    let profileId = this.props.location.pathname.split("/")[2];
    if (!profileId || profileId === ":userId") {
      profileId = 26350;
    }

    this.props.setProfileTC(profileId);
    this.props.getStatus(profileId);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { setProfileTC, getStatus, updateStatus }),
  withAuthRedirect,
  withRouter
)(ProfileConteiner);
