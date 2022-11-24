import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import MyPostsCSS from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const AddMyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="postTextarea"
          placeholder="Enter your text"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddMyPostFormReduxForm = reduxForm({ form: "MyPost" })(AddMyPostForm);

const MyPosts = (props) => {
  const addPost = (dataForm) => {
    props.addPost(dataForm.postTextarea);
  };

  return (
    <>
      <div className={MyPostsCSS.myPostConteiner}>
        My post
        <AddMyPostFormReduxForm onSubmit={addPost} />
      </div>
      {props.profilePage.post.map((post) => {
        return (
          <Post
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
          />
        );
      })}
    </>
  );
};

export default MyPosts;
