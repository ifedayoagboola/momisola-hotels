import React from "react";
import styled from "styled-components";
import mom1 from "../images/gallery/mom1.jpeg";
import mom2 from "../images/gallery/mom2.jpeg";
import mom3 from "../images/gallery/mom3.jpeg";
import mom4 from "../images/gallery/mom4.jpeg";
import mom5 from "../images/gallery/mom5.jpeg";
import mom6 from "../images/gallery/mom6.jpeg";
import mom7 from "../images/gallery/mom7.jpeg";
import mom8 from "../images/gallery/mom8.jpeg";
import mom9 from "../images/gallery/mom9.jpeg";
import mom10 from "../images/gallery/mom10.jpeg";
import mom11 from "../images/gallery/mom11.jpeg";
import mom12 from "../images/gallery/mom12.jpeg";
import mom13 from "../images/gallery/mom13.jpeg";
import mom14 from "../images/gallery/mom14.jpeg";
import mom15 from "../images/gallery/mom15.jpeg";
import mom16 from "../images/gallery/mom16.jpeg";
import mom17 from "../images/gallery/mom17.jpeg";
import mom18 from "../images/gallery/mom18.jpeg";
import mom19 from "../images/gallery/mom19.jpeg";
import mom20 from "../images/gallery/mom20.jpeg";
import mom21 from "../images/gallery/mom21.jpeg";
import mom22 from "../images/gallery/mom22.jpeg";
import mom23 from "../images/gallery/mom23.jpeg";
import mom24 from "../images/gallery/mom24.jpeg";
import mom25 from "../images/gallery/mom25.jpeg";
import mom26 from "../images/gallery/mom26.jpeg";
import mom27 from "../images/gallery/mom27.jpeg";
import mom28 from "../images/gallery/mom28.jpeg";
import mom29 from "../images/gallery/mom29.jpeg";

const Gallery = () => {
  return (
    <>
      <Parent>
        {/* <img src={mom1} alt="" /> */}
        <img src={mom2} alt="" />
        <img src={mom3} alt="" />
        <img src={mom4} alt="" />
        <img src={mom5} alt="" />
        <img src={mom6} alt="" />
        <img src={mom7} alt="" />
        <img src={mom8} alt="" />
        <img src={mom9} alt="" />
        <img src={mom10} alt="" />
        <img src={mom11} alt="" />
        <img src={mom12} alt="" />
        <img src={mom13} alt="" />
        <img src={mom14} alt="" />
        <img src={mom15} alt="" />
        <img src={mom16} alt="" />
        <img src={mom17} alt="" />
        <img src={mom18} alt="" />
        <img src={mom19} alt="" />
        <img src={mom20} alt="" />
        <img src={mom21} alt="" />
        <img src={mom22} alt="" />
        <img src={mom23} alt="" />
        <img src={mom24} alt="" />
        <img src={mom25} alt="" />
        <img src={mom26} alt="" />
        <img src={mom27} alt="" />
        <img src={mom28} alt="" />
        <img src={mom29} alt="" />
      </Parent>
    </>
  );
};
const Parent = styled.div`
  padding: 6rem 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.5rem;
  img {
    width: 100%;
  }
`;
export default Gallery;
