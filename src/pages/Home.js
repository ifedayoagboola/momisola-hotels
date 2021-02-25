import React from "react";
import Hero from "../components/Hero";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <div>
      <Hero slides={SliderData} />
    </div>
  );
};

export default Home;
