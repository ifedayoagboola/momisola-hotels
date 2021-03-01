import React from "react";
import Hero from "../components/Hero";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import Footer from "../components/Footer";
import { SliderData } from "../data/SliderData";

const Home = () => {
  return (
    <div>
      <Hero slides={SliderData} />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <Footer />
    </div>
  );
};

export default Home;
