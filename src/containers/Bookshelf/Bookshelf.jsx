import React from "react";
import "./Bookshelf.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Bookshelf = () => {
  return (
    <div className="bookshelf-section">
      <div className="bookshelf-section__home">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Bookshelf;
