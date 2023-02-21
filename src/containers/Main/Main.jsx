import React from "react";
import "./Main.scss";
import Title from "../../components/Title/Title";

const Main = ({ blogpostArr }) => {
  const targetObj = blogpostArr[0];
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
        <div className="blog-section-main__body">
          <div className="blog-section-main__body--title">
            {targetObj.title}
          </div>
          <div className="blog-section-main__body--text">{targetObj.text}</div>
        </div>
      </div>
      <div className="carousel-section-main">
        <div className="carousel-section-main__title">Carousel</div>
        <div className="carousel-section-main__body">Text</div>
      </div>
    </div>
  );
};

export default Main;
