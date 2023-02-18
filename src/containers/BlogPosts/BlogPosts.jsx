import React from "react";
import "./BlogPosts.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const BlogPosts = () => {
  return (
    <div className="blog-section">
      <div className="blog-section__home">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPosts;
