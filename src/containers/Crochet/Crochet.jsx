import React from "react";
import "./Crochet.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Crochet = () => {
  return (
    <div>
      <div className="crochet-section">
        <div className="crochet-section__home">
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

export default Crochet;
