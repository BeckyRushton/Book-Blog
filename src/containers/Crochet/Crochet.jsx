import React from "react";
import "./TBR.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const TBR = () => {
  return (
    <div>
      <div className="tbr-section">
        <div className="tbr-section__home">
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

export default TBR;
