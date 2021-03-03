import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterBg>
      <Row1>
        <Column1>
          <h1>We are home away from home!</h1>
        </Column1>
        <Column2>
          <ul>
            <li>
              <Link to="/">Quick Nav</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Bookings</Link>
            </li>
          </ul>
        </Column2>
        <Column3>
          <ul>
            <li>
              <Link to="/">Quick Nav</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Bookings</Link>
            </li>
          </ul>
        </Column3>
      </Row1>
      <Row2>
        <Socials>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">Mail</Link>
        </Socials>

        <Button secondary="true">Book now</Button>
      </Row2>
    </FooterBg>
  );
};
const FooterBg = styled.div`
  background: #000d1a;
  padding: 5rem 10rem;
  text-align: left;
  @media (max-width: 1300px) {
    display: block;
    padding: 1rem;
  }
`;
const Row1 = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  @media (max-width: 1300px) {
    display: block;
  }
`;
const Column1 = styled.div`
  h1 {
    font-size: 3.5rem;
    color: #fff;
  }
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    ul {
      align-items: left;
      justify-content: left;
      text-align: left;
    }
  }
`;
const Column3 = styled(Column2)``;
const Row2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #fff;
  }
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Footer;
