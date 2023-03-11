import React from "react";
import "./Main.scss";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Main = ({ blogpostArr }) => {
  const targetObj = blogpostArr[0];
  return (
    <div className="main-section">
      <div className="title-section">
        <Title />
      </div>

      <div className="about-section-main">
        <div className="about-section-main__title">About</div>
        <div className="about-section-main__body">
          <div className="about-section-main__text">
            <p className="about-section-main__text--top">Hi, I'm Becky! 💁🏼‍♀️</p>
            <p className="about-section-main__text--bottom">
              Welcome to the blog I've created to not only share my interests
              but also to practice and showcase my coding skills so far.
            </p>
          </div>

          <div className="about-section-main__button">
            <Link
              to={"/about"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button buttonText={"Find out more..."} />
            </Link>
          </div>
        </div>
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
