import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { Facebook } from "@styled-icons/bootstrap/Facebook";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp";
import { Telephone } from "@styled-icons/bootstrap/Telephone";
import { GeoAlt } from "@styled-icons/bootstrap/GeoAlt";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";

const Footer = () => {
  return (
    <FooterBg>
      <Row1>
        <Column1>
          <h1>We never forget you have a choice!</h1>
          <Socials>
            <Link to="">
              <FacebookIcon
                onClick={(event) =>
                  (window.location.href =
                    "https://web.facebook.com/momisolahotels")
                }
              />
            </Link>
            <Link to="">
              <InstagramIcon
                onClick={(event) =>
                  (window.location.href =
                    "https://www.instagram.com/momisolahotels/")
                }
              />
            </Link>

            <WhatsappIcon
              onClick={(event) =>
                (window.location.href =
                  "https://api.whatsapp.com/send?phone=08131534590")
              }
            />
          </Socials>
        </Column1>
        <Column2>
          <ul>
            <h3>Reach out</h3>
            <li>
              <PhoneIcon />
              +234 8131 534 590 <br /> +234 8147 747 673
            </li>
            <li>
              <MailIcon />
              bookings@momisolahotels.com
            </li>
            <li>
              <LocationIcon />
              3, Laniyan Close, Opposite Honda Factory, KLM 6, Ota, Idiroko
              Expressway, Sango Ota, Ogun State, Nigeria.
            </li>
          </ul>
        </Column2>
        <Column3>
          <ul>
            <h3>Quick Nav</h3>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/services">Bookings</Link>
            </li>
          </ul>
          <Link to="/bookings">
            <Button secondary="true">Book now</Button>
          </Link>
        </Column3>
      </Row1>
      <p>copyright 2021@momisolahotels.com</p>
    </FooterBg>
  );
};
const FooterBg = styled.div`
  background: #000d1a;
  padding: 5rem 3rem;
  text-align: left;
  @media (max-width: 1300px) {
    display: block;
    padding: 1rem;
  }
`;
const Row1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 130px;
  @media (max-width: 1300px) {
    display: block;
  }
`;
const Column1 = styled.div`
  h1 {
    font-size: 3rem;
    color: #fff;
  }
  @media (max-width: 1300px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    text-align: left;
    color: #fff;
    font-weight: bold;
    padding: 2rem 0;
  }
  li {
    font-size: 1rem;
    padding: 0.6rem 0;
    display: flex;
    color: #fff;
  }
  @media (max-width: 1300px) {
    ul {
      align-items: left;
      justify-content: left;
      text-align: left;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;
const Column3 = styled.div`
  h3 {
    font-size: 1.5rem;
    color: #fff;
  }
  /* margin: 2rem 0 2rem 2rem; */
  li {
    padding: 1rem 0;
  }

  a {
    font-size: 1rem;
  }

  @media (max-width: 1300px) {
    margin: 2rem 0;
  }
`;
const Socials = styled.div``;
const FacebookIcon = styled(Facebook)`
  color: #fff;
  width: 50px;
  margin: 1rem 1rem 1rem 0;
`;
const InstagramIcon = styled(InstagramWithCircle)`
  color: #fff;
  width: 60px;
  margin: 1rem;
`;
const WhatsappIcon = styled(Whatsapp)`
  color: #fff;
  width: 75px;
  margin: 1rem;
`;
const PhoneIcon = styled(Telephone)`
  color: #fff;
  width: 30px;
  margin-right: 0.7rem;
`;
const LocationIcon = styled(GeoAlt)`
  color: #fff;
  width: 100px;
  margin-right: 0.7rem;
`;
const MailIcon = styled(EmailOutline)`
  color: #fff;
  width: 30px;
  margin-right: 0.7rem;
`;

export default Footer;
