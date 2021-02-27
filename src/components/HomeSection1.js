import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

import house1 from "../images/house-1.jpg";

const HomeSection1 = () => {
  return (
    <Section1>
      <Description>
        <h1>Explore our beautiful rooms</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          culpa. amet consectetur adipisicing elit.
        </p>
        <Button>Book now</Button>
      </Description>
      <Image>
        <img src={house1} alt="Section1 image" />
      </Image>
    </Section1>
  );
};

const Section1 = styled.div`
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
    text-align: center;
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
  }
`;

export default HomeSection1;
