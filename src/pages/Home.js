import React from "react";
import Hero from "../components/Hero";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import Footer from "../components/Footer";
import { SliderData } from "../data/SliderData";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animate";

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Hero slides={SliderData} />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <Footer />
    </motion.div>
  );
};

export default Home;
