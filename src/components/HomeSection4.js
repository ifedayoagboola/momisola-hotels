import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import mom20 from "../images/pic2.jpeg";
import { Link } from "react-router-dom";

//Animate
import { motion } from "framer-motion";
import { section4Anime } from "../Animate";
import { imageAnime } from "../Animate";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const HomeSection4 = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return (
    <Section4 ref={element} animate={controls}>
      <Image>
        <motion.img variants={imageAnime} src={mom20} alt="Section4Image" />
      </Image>
      <Description>
        <motion.h1
          variants={section4Anime}
          initial="hiddenytop"
          animate={controls}
        >
          Explore our beautiful rooms
        </motion.h1>
        <motion.p variants={section4Anime} initial="hiddenx" animate={controls}>
          Our rooms and suite are fitted with bedside refrigerator; fully
          airconditioned with ecofriendly Thermocool Inverter Split
          Air-conditioners and in addition, each of the rooms has an electric
          ceiling fan fitted.
        </motion.p>
        <motion.p variants={section4Anime} initial="hiddenx" animate={controls}>
          The hotel provides free internet (Wi-Fi) access to guests during the
          length of their stay. And there is telephone intercom for effective
          communication with the Receptionist and Bar.
        </motion.p>
        <Link to="/bookings">
          <Button primary="true">Book now</Button>
        </Link>
      </Description>
    </Section4>
  );
};
const Section4 = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  overflow: hidden;

  @media (max-width: 1300px) {
    display: block;
    padding: 1rem 1rem;
    text-align: center;
  }
`;
const Description = styled.div`
  flex: 1;
  padding-left: 5rem;
  button {
    max-width: 160px;
  }
  @media (max-width: 1300px) {
    padding: 5rem 0;
    text-align: left;
    justify-content: center;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    border: 2px solid #fff;
  }
`;

export default HomeSection4;
