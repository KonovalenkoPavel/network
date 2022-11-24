import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageCount };
    case IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case SET_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageCount) => ({
  type: SET_CURRENT_PAGE,
  pageCount,
});
export const setFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const setFollowingInProgress = (isFetching, id) => ({
  type: SET_FOLLOWING_IN_PROGRESS,
  isFetching,
  id,
});

export const getUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(setFetching(false));
    usersAPI.getUsers(pageSize, currentPage).then((data) => {
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setFetching(true));
      dispatch(setUsers(data.items));
    });
  };
};
export const followUser = (id) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, id));
    usersAPI.setUnfollow(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(follow(id));
      }
      dispatch(setFollowingInProgress(false, id));
    });
  };
};
export const unfollowUser = (id) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, id));
    usersAPI.setFollow(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(setFollowingInProgress(false, id));
    });
  };
};

export default usersReducer;
