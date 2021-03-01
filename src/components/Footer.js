import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterBg>
      <Row1>
        <Column1>
          <h1>We are home away from home</h1>
        </Column1>
        <Column2>
          <Link>Quick Nav</Link>
          <Link>Home</Link>
          <Link>About us</Link>
          <Link>Bookings</Link>
        </Column2>
        <Column3>
          <Link>Contact</Link>
          <Link>mail</Link>
          <Link>Address</Link>
          <Link>Customer Care</Link>
        </Column3>
      </Row1>
      <Row2>
        <Socials>
          <Link>Facebook</Link>
          <Link>Instagram</Link>
          <Link>Mail</Link>
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
`;
const Row1 = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
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
