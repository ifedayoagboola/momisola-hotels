import React from "react";
import styled from "styled-components";
import house2 from "../images/house-2.jpg";
import { Button } from "./Button";

const HomeSection = () => {
  return (
    <Section3>
      <Description>
        <h1>Stunning Interior</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          odio quis assumenda aliquam quod enim?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          vitae?
        </p>
        <Button primary="true">Book now</Button>
      </Description>
      <Image>
        <img src={house2} alt="" />
      </Image>
    </Section3>
  );
};

const Section3 = styled.div`
  background: #fff;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0 5rem 10rem;
  overflow: hidden;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    height: 150px;
    top: 10px;
    left: 0;
    right: 0;
    background: #000;
  }
  ::after {
    content: "";
    position: absolute;
    height: 150px;
    bottom: 10px;
    left: 0;
    right: 0;
    background: #000;
  }

  @media (max-width: 1300px) {
    display: block;
    padding: 1rem 1rem;
    text-align: center;
    ::before,
    ::after {
      display: none;
    }
  }
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  button {
    max-width: 160px;
  }
  @media (max-width: 1300px) {
    padding: 1rem 0;
    text-align: left;
    justify-content: center;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 100;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export default HomeSection;
