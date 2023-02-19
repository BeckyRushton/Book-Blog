import React from "react";
import "./Fashion.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Fashion = () => {
  return (
    <div className="fashion-section">
      <div className="fashion-section__home">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Fashion;
