import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  post: [
    { id: 1, message: "Hi, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post", likesCount: 25 },
  ],
  userProfile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newItem = {
        id: Date.now(),
        message: action.text,
        likesCount: 0,
      };
      return {
        ...state,
        post: [...state.post, newItem],
      };
    }
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
export default profileReducer;
export const addPostActionCreator = (text) => ({ type: ADD_POST, text });
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status: status,
});

export const setProfileTC = (profileId) => {
  return (dispatch) => {
    usersAPI.setUserInProfilePage(profileId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => dispatch(setStatus(response.data)));
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
