import React from "react";
import "./BlogPosts.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const BlogPosts = () => {
  return (
    <div className="blogSection">
      <div className="blog-posts-home-button">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPosts;
