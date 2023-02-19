import React from "react";
import "./BlogPost.scss";

const BlogPost = ({ blogpostArr }) => {
  const targetObj = blogpostArr[0];
  return (
    <div className="blog-post-section">
      <div className="blog-post">
        <div className="blog-post__title">{targetObj.title}</div>
        <div className="blog-post__body">{targetObj.text}</div>
      </div>
    </div>
  );
};

export default BlogPost;
