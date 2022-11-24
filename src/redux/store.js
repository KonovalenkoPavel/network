import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, message: "Hi, how are you?", likesCount: 10 },
        { id: 2, message: "It's my first post", likesCount: 25 },
      ],
      newPostText: "Hello!",
    },
    dialogPage: {
      dialog: [
        { id: 1, name: "Dymych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Petya" },
        { id: 6, name: "Pavel" },
      ],
      message: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
      newMessageText: "Message",
    },
    sidebar: {},
  },
  _callSuscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSuscriber = observer;
  },
  dispatch(action) {
    store._state.profilePage = profileReducer(this._state.profilePage, action);
    store._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    store._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSuscriber(this._state);
  },
};

export default store;
