import React from "react";
import "./Nav.scss";
import Favourites from "../Favourites/Favourites";
import TBR from "../TBR/TBR";
import BlogPosts from "../BlogPosts/BlogPosts";
import Home from "../Home/Home";

const Nav = () => {
  return (
    <div className="navbar">
      <Home />
      <Favourites />
      <TBR />
      <BlogPosts />
    </div>
  );
};

export default Nav;
