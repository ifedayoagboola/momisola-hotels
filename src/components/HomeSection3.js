import React from "react";
import styled from "styled-components";
import mom12 from "../images/mom12.jpeg";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <Section3>
      <Description>
        <h1>Stunning Interior</h1>
        <p>
          Are you interested in knowing about our offers? Follow us as we take
          you around. To see some of our offers, kindly click on the "Book now"
          button below. We are available 24/7 should you have any questions.
        </p>
        <p>You can also contact us by clicking on the contact button.</p>
        <Link to="/bookings">
          <Button primary="true">Book now</Button>
        </Link>
      </Description>
      <Image>
        <img src={mom12} alt="" />
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
    background: #000d1a;
  }
  ::after {
    content: "";
    position: absolute;
    height: 150px;
    bottom: 10px;
    left: 0;
    right: 0;
    background: #000d1a;
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
    border: 2px solid #fff;
  }
`;
export default HomeSection;
