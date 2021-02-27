import React from "react";
import Hero from "../components/Hero";
import HomeSection1 from "../components/HomeSection1";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <div>
      <Hero slides={SliderData} />
      <HomeSection1 />
    </div>
  );
};

export default Home;
