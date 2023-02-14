import "./App.scss";
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
