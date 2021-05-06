import React from "react";
import MyCard from "./MyCard";

const Post = (props) => {
  return (
    <>
      <div className="article_container">
        <MyCard title={props.title} content={props.content}/>
      </div>
    </>
  );
};

export default Post;
