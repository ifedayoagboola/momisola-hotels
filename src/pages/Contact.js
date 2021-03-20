import React from "react";
import styled from "styled-components";
import ContactItem from "../components/ContactItem";
import telephone from "../images/telephone.svg";
import letter from "../images/letter.svg";
import location from "../images/location.svg";
import Footer from "../components/Footer";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animate";

const Contact = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ContactPage>
        <MapSection>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63409.461805202234!2d3.183582413807997!3d6.635575079324781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%2C%20Laniyan%20Close%2C%20Opposite%20Honda%20Factory%2C%20KLM%206%2C%20Ota%2C%20Idiroko%20Expressway%2C%20Sango%20Ota%2C%20Ogun%20State%2C%20Nigeria.!5e0!3m2!1sen!2sng!4v1615235642957!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapSection>
        <ContactSection>
          <ContactItem
            icon={telephone}
            text1={"+234 814 774 7673"}
            text2={"+234 8131 534 590"}
            title={"phone"}
          />
          <ContactItem
            icon={letter}
            text1={"Bookings@momisolahotels.com"}
            text2={"customercare@momisolahotels.com"}
            title={"email"}
          />
          <ContactItem
            icon={location}
            text1={
              "3, Laniyan Close, Opposite Honda Factory, KLM 6, Ota, Idiroko Expressway, Sango Ota"
            }
            text2={" Ogun State, Nigeria."}
            title={"address"}
          />
        </ContactSection>
      </ContactPage>

      <Footer />
    </motion.div>
  );
};

const ContactPage = styled.div`
  background: #000d1a;
  padding: 10rem 10rem 0;
  display: grid;
  margin-bottom: 0.1rem;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 5rem 0 0;
  }
`;
const MapSection = styled.div`
  width: 97%;
  padding: 1.5rem;
  background-color: #191d2b;
  iframe {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1300px) {
    height: 50vh;
    width: 100%;
    margin-bottom: 1rem;
  }
`;
const ContactSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;

export default Contact;
