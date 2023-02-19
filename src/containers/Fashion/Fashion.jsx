import React from "react";
import "./Favourites.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Favourites = () => {
  return (
    <div className="favourites-section">
      <div className="favourites-section__home">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Favourites;
