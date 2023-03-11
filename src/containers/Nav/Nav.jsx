import React from "react";
import "./Nav.scss";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <Link style={{ color: "inherit", textDecoration: "inherit" }} to={`/`}>
        Home
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/blogposts`}
      >
        Blog Posts
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/bookshelf`}
      >
        Bookshelf
      </Link>

      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={`/about`}
      >
        About
      </Link>
    </div>
  );
};

export default Nav;
