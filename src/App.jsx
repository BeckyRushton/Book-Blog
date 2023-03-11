import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import BlogPosts from "./containers/BlogPosts/BlogPosts";
import Bookshelf from "./containers/Bookshelf/Bookshelf";
import About from "./containers/About/About";
import blogpostArr from "./blogposts.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main blogpostArr={blogpostArr} />}></Route>
          <Route
            path="/blogposts"
            element={<BlogPosts blogpostArr={blogpostArr} />}
          ></Route>
          <Route path="/bookshelf" element={<Bookshelf />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
