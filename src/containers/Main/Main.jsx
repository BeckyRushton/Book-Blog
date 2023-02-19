import React from "react";
import "./Main.scss";
// import Carousel from "../../components/Carousel/Carousel";
// import BlogPosts from "../BlogPosts/BlogPosts";
// import About from "../About/About";
import Title from "../../components/Title/Title";

const Main = ({ blogpostArr }) => {
  return (
    <div className="main-section">
      <div className="title-section">
        <Title />
      </div>

      <div className="about-section-main">
        <div className="about-section-main__title">About</div>
        <div className="about-section-main__body">Text</div>
      </div>
      <div className="blog-section-main">
        <div className="blog-section-main__title">Blog Posts</div>
        <div className="blog-section-main__body">Text</div>
      </div>
      <div className="carousel-section-main">
        <div className="carousel-section-main__title">Carousel</div>
        <div className="carousel-section-main__body">Text</div>
      </div>
    </div>
  );
};

export default Main;
