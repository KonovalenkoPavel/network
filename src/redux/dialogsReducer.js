const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newItem = {
        id: Date.now(),
        message: state.newMessageText,
      };
      return {
        ...state,
        message: [...state.message, newItem],
        newMessageText: "",
      };
    }
    case UPDATE_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.text,
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text,
});
