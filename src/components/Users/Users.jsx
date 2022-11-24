import React from "react";
import usersCSS from "./Users.module.css";
import userLogo from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  if (pagesCount > 10) {
    for (let i = 1; i <= 10; i++) {
      pages.push(i);
    }
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              key={page + "qwe"}
              className={`${usersCSS.pages} ${
                props.currentPage === page ? usersCSS.selectedPage : ""
              }`}
              onClick={() => props.onPageChanged(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((user) => {
          return (
            <div key={user.id}>
              <span>
                <div className={usersCSS.image}>
                  <NavLink to={`/profile/${user.id}`}>
                    <img
                      src={user.photos.large ? user.photos.large : userLogo}
                      alt="logo"
                    />
                  </NavLink>
                </div>
                <div>
                  {user.followed ? (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === user.id
                      )}
                      onClick={() => {
                        props.followUser(user.id);
                      }}
                    >
                      Unfollowed
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === user.id
                      )}
                      onClick={() => {
                        props.unfollowUser(user.id);
                      }}
                    >
                      Followed
                    </button>
                  )}
                </div>
              </span>
              <span>
                <div>{user.name}</div>
                <div>{user.id}</div>
              </span>
              <span>
                <div>{"user.address.street"}</div>
                <div>{"user.address.city"}</div>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
