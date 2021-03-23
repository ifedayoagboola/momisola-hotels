import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import mom11 from "../images/pic7.jpeg";

//Animation
import { motion } from "framer-motion";
import { imageAnime } from "../Animate";
import { section4Anime } from "../Animate";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const HomeSection1 = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return (
    <Section1>
      <Description>
        <motion.h1
          ref={element}
          variants={section4Anime}
          initial="hiddenytop"
          animate={controls}
        >
          Welcome to Momisola Hotels
        </motion.h1>
        <motion.p variants={section4Anime} initial="hiddenx" animate={controls}>
          The vision of the Momisola Hotels is to put hospitality services on
          the highest level at an affordable cost in order to satisfy the
          demands and expectations of our guests.
        </motion.p>
        <motion.p>
          Our aim is to make Momisola Hotels a place for excellent dining
          experience, unforgettable encounters, business success, pleasant
          meetings, short- and long-term lodgings.
        </motion.p>
        <Link to="/bookings">
          <Button primary="true">Book now</Button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={imageAnime} src={mom11} alt="Section1Image" />
      </Image>
    </Section1>
  );
};

const Section1 = styled(motion.div)`
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
  padding-right: 5rem;
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
    border: 3px solid #fff;
  }
`;

export default HomeSection1;
