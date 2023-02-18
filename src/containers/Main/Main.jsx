import React from "react";
import "./Main.scss";
// import Carousel from "../../components/Carousel/Carousel";
// import BlogPosts from "../BlogPosts/BlogPosts";
// import About from "../About/About";
import Title from "../../components/Title/Title";

const Main = () => {
  return (
    <div className="main-section">
      <div className="title-section">
        <Title />
      </div>

      <div className="about-section">
        <div className="about-section__title">About</div>{" "}
      </div>
      <div className="blog-section">
        <div className="blog-section__title">Blog Posts</div>
      </div>
      <div className="carousel-section">
        <div className="carousel-section__title">Carousel</div>{" "}
      </div>
    </div>
  );
};

export default Main;
