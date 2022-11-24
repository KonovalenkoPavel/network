import React from "react";
import MyPostsCSS from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let addPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  };

  return (
    <>
      <div className={MyPostsCSS.myPostConteiner}>
        My post
        <div>
          <div>
            <textarea
              value={props.profilePage.newPostText}
              onChange={(e) => onPostChange(e)}
            />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
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
