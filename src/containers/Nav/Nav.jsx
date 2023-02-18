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
      <Link style={{ color: "inherit", textDecoration: "inherit" }} to={`/`}>
        <Button buttonText={"Home"} />
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/blogposts`}
      >
        <Button buttonText={"Blog Posts"} />
      </Link>
      <Link style={{ color: "inherit", textDecoration: "inherit" }} to={`/tbr`}>
        <Button buttonText={"TBR"} />
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/bookshelf`}
      >
        <Button buttonText={"Bookshelf"} />
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/favourites`}
      >
        <Button buttonText={"Favourites"} />
      </Link>
    </div>
  );
};

export default Nav;
