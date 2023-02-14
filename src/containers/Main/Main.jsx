import React from "react";
import "./Main.scss";
import Carousel from "../../components/Carousel/Carousel";
import Favourites from "../Favourites/Favourites";
import About from "../About/About";

const Main = () => {
  return (
    <div>
      <About />
      <Favourites />
      <Carousel />
    </div>
  );
};

export default Main;
