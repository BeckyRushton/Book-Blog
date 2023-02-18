import React from "react";
import "./TBR.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const TBR = () => {
  return (
    <div>
      <div className="blogSection">
        <div className="blog-posts-home-button">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button buttonText={"Home"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TBR;
