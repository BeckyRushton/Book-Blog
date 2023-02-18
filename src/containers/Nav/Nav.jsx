import React from "react";
import "./Nav.scss";
// import Favourites from "../Favourites/Favourites";
// import TBR from "../TBR/TBR";
// import BlogPosts from "../BlogPosts/BlogPosts";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <Link style={{ textDecoration: "none" }} to={`/blogposts`}>
        <Button buttonText={"Blog Posts"} />
      </Link>
      <Link style={{ textDecoration: "none" }} to={`/tbr`}>
        <Button buttonText={"TBR"} />
      </Link>
      <Link style={{ textDecoration: "none" }} to={`/bookshelf`}>
        <Button buttonText={"Bookshelf"} />
      </Link>
    </div>
  );
};

export default Nav;
