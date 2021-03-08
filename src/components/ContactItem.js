import React from "react";
import styled from "styled-components";

const ContactItem = ({ icon, text1, text2, title }) => {
  return (
    <ContactContent>
      <Contact>
        <img src={icon} alt="" />
        <RightItems>
          <h6>{title}</h6>
          <p>{text1}</p>
          <p>{text2}</p>
        </RightItems>
      </Contact>
    </ContactContent>
  );
};

const Contact = styled.div`
  width: 100%;
  padding: 3rem 0;
  background-color: #191d2b;
  display: flex;
  align-items: center;

  img {
    width: 16%;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(45deg)
      brightness(105%) contrast(101%);
    padding: 1rem;
    border: 1px solid #2e344e;
    margin-left: 2rem;
  }
`;
const RightItems = styled.div`
  h6 {
    font-size: 1.4rem;
    font-weight: 500;
    color: #fff;
  }
  p {
    color: #fff;
  }
  margin-left: 2rem;
`;
const ContactContent = styled.div`
  width: 100%;
  &:not(:last:child) {
    margin-bottom: 1rem;
  }
`;

export default ContactItem;
