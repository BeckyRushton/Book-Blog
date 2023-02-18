import React from "react";
import "./Bookshelf.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Bookshelf = () => {
  return (
    <div className="bookshelfSection">
      <div className="bookshelf-home-button">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Bookshelf;
