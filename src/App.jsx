import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import BlogPosts from "./containers/BlogPosts/BlogPosts";
import TBR from "./containers/TBR/TBR";
import Bookshelf from "./containers/Bookshelf/Bookshelf";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Main />
              </>
            }
          ></Route>
          <Route path="/blogposts" element={<BlogPosts />}></Route>
          <Route path="/tbr" element={<TBR />}></Route>
          <Route path="/bookshelf" element={<Bookshelf />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
