import React from "react";
import "./Main.scss";
// import Carousel from "../../components/Carousel/Carousel";
// import BlogPosts from "../BlogPosts/BlogPosts";
// import About from "../About/About";
import Title from "../../components/Title/Title";

const Main = () => {
  return (
    <div className="mainSection">
      <Title />
      <div className="aboutSection">About</div>
      <div className="recentBlogSection">Blog</div>
      <div className="carouselSection">Carousel</div>
    </div>
  );
};

export default Main;
