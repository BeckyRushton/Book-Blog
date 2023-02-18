import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-section__home">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
