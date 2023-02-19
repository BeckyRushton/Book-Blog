import React from "react";
import "./BlogPosts.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import BlogPost from "../../components/BlogPost/BlogPost";

const BlogPosts = ({ blogpostArr }) => {
  return (
    <div className="blog-section">
      <div className="blog-section__top">
        <div className="blog-section__title">Blog Posts</div>
        <div className="blog-section__new">
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button buttonText={"New Post"}></Button>
          </Link>
        </div>
      </div>

      <div className="blog-section__post">
        <BlogPost blogpostArr={blogpostArr} />
      </div>
      <div className="blog-section__home">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPosts;
