import React from "react";
import PostCSS from "./Post.module.css";

const Post = (props) => {
  return (
    <>
      <div className={PostCSS.item}>
        <img src="https://nklk.ru/dll_image/6628.png" alt="logo3" />
        {props.message}
        <div>
          <span>likes</span> {props.likesCount}
        </div>
      </div>
    </>
  );
};

export default Post;
