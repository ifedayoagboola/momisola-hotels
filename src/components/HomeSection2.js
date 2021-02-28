import React from "react";
import styled from "styled-components";
import house1 from "../images/house-1.jpg";

const HomeSection2 = () => {
  return (
    <Section2>
      <h1>View our executive rooms</h1>
      <Images>
        <ImageA>
          <img src={house1} alt="" />
          <p>
            one Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, dolores. one Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores, dolores. one Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Asperiores, dolores.
          </p>
        </ImageA>
        <ImageB>
          <img src={house1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            dolores..
          </p>
        </ImageB>
      </Images>
    </Section2>
  );
};
const Section2 = styled.div`
  min-height: 90vh;
  width: 80%;
  margin: 1.5rem auto;
  h1 {
    padding: 3rem 0;
  }
  @media (max-width: 1300px) {
    margin: 1rem;
    h1 {
      padding: 1rem 0 0.5rem;
    }
  }
`;
const Images = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;

  @media (max-width: 1300px) {
    padding: 0.5rem 0;
    text-align: left;
    margin: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
const ImageA = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  width: 550px;
  img {
    width: 100%;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 1300px) {
    width: 100vw;

    img {
      width: 100vw;
      overflow: hidden;
    }
  }
`;
const ImageB = styled.div`
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
  width: 500px;
  margin-left: 8rem;
  img {
    width: 100%;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 1300px) {
    margin: 0;
    width: 100vw;
    img {
      width: 100vw;
      overflow: hidden;
    }
  }
`;

export default HomeSection2;
