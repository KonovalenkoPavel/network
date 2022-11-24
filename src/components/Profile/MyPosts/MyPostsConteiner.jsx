import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;

// const MyPostsConteiner = () => {
//   return (
//     <StoreContext.Consumer>
//       {(value) => {
//         let state = value.getState();
//         let addPost = () => {
//           value.dispatch(addPostActionCreator());
//           value.dispatch(updateNewPostTextActionCreator(""));
//         };

//         const onPostChange = (text) => {
//           value.dispatch(updateNewPostTextActionCreator(text));
//         };
//         return (
//           <MyPosts
//             addPost={addPost}
//             onPostChange={onPostChange}
//             profilePage={state.profilePage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
