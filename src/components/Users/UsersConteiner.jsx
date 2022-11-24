import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  getUsers,
  followUser,
  unfollowUser,
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    totalUsersCount: state.usersPage.totalUsersCount,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

class UserApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(this.props.pageSize, page);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Users
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            setCurrentPage={this.props.setCurrentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        ) : (
          <Preloader />
        )}
      </>
    );
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect
)(UserApiComponent);

// let AuthRedirectComponent = withAuthRedirect(UserApiComponent);
// const UsersContainer = connect(mapStateToProps, {
//   follow,
//   unfollow,

//   setCurrentPage,

//   getUsers,
//   followUser,
//   unfollowUser,
// })(AuthRedirectComponent);
// export default UsersContainer;
