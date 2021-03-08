import React from "react";
import styled from "styled-components";
import HomeSection1 from "../components/HomeSection1";
import ServiceSection from "../components/ServiceSection";
import Footer from "../components/Footer";
import house1 from "../images/mom4.jpeg";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <ServicesContainer>
          <ServiceSection />
        </ServicesContainer>
      </AboutContainer>
      <HomeSection1 />
      <Footer />
    </div>
  );
};
const ServicesContainer = styled.div`
  display: flex;
  padding: 5rem 0;
`;
const AboutContainer = styled.div`
  background: url(${house1});
  padding: 0 10rem;
  overflow: hidden;
  @media (max-width: 1300px) {
    background: #191d28;
    padding: 0;
  }
`;

export default About;
