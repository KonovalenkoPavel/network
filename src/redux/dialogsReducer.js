const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newItem = {
        id: Date.now(),
        message: action.text,
      };
      return {
        ...state,
        message: [...state.message, newItem],
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;

export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE, text });
