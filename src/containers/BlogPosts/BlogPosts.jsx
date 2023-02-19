import React from "react";
import "./BlogPosts.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import BlogPost from "../../components/BlogPost/BlogPost";

const BlogPosts = () => {
  return (
    <div className="blog-section">
      <div className="blog-section-top">
        <div className="blog-section__title">Blog Posts</div>
        <div className="blog-section__new">
          <div className="blog-section__new--button">
            <Link
              to={"/"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button buttonText={"New Post"}></Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="blog-section__post">
        <BlogPost />
      </div>
      <div className="blog-section__home">
        <div className="blog-section__home--button">
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button buttonText={"Home"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
