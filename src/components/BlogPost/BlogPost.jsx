import React from "react";
import "./BlogPost.scss";

const BlogPost = ({ blog }) => {
  return (
    <div className="blog-post-section">
      <div className="blog-post">
        <div className="blog-post__title">{blog.title}</div>
        <div className="blog-post__body">{blog.text}</div>
      </div>
    </div>
  );
};

export default BlogPost;
