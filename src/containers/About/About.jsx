import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import profileImg from "../../assets/images/blog-owner-image.jpg";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-section__image">
        {" "}
        <img
          className="about-section__image--image"
          src={profileImg}
          alt="blog owner image"
        />
      </div>

      <p className="about-section__heading">Hi, I'm Becky!</p>
      <p className="about-section__subheading">
        Welcome to the blog I've created to not only share my interests but also
        to practice and showcase my coding skills so far.
      </p>
      <p className="about-section__text">
        Originally from Wales, I a 27-year-old living in London who has a
        background in media, communications, gender and cultural studies. When
        I'm not learning to code and design beautiful websites, I spend my time
        crocheting, reading and finding fashion inspiration.
      </p>
      <ul className="about-section__facts">
        Random facts about me:
        <li className="about-section__facts--1">
          I make the best Welsh cakes (obviously, it's in my blood!)
        </li>
        <li className="about-section__facts--2">
          I'm really talented at winged eye-liner (I've been drawing on my
          confidence wings since I was a teenager!)
        </li>
        <li className="about-section__facts--3">
          I used to be a drama club lover, but now I'm an introvert (not sure
          what happened there...)
        </li>
      </ul>
      <div className="about-section__home">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
