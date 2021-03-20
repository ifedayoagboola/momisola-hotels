import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import mom11 from "../images/pic7.jpeg";

const HomeSection1 = () => {
  return (
    <Section1>
      <Description>
        <h1>Welcome to Momisola Hotels</h1>
        <p>
          The vision of the Momisola Hotels is to put hospitality services on
          the highest level at an affordable cost in order to satisfy the
          demands and expectations of our guests.
        </p>
        <p>
          Our aim is to make Momisola Hotels a place for excellent dining
          experience, unforgettable encounters, business success, pleasant
          meetings, short- and long-term lodgings.
        </p>
        <Link to="/bookings">
          <Button primary="true">Book now</Button>
        </Link>
      </Description>
      <Image>
        <img src={mom11} alt="Section1Image" />
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

export default HomeSection1;
