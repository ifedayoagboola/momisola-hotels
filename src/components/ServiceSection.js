import React from "react";
import styled from "styled-components";
import { Cctv } from "@styled-icons/boxicons-regular/Cctv";
import { LightbulbFill } from "@styled-icons/bootstrap/LightbulbFill";
import { Air } from "@styled-icons/entypo/Air";

const ServiceSection = () => {
  return (
    <div>
      <Service>
        <Content>
          <CctvIcon />
          <h5>Momisola Hotels1</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae
            voluptate enim recusandae.
          </p>
        </Content>
        <Content>
          <BulbIcon />
          <h5>Momisola Hotels2</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae
            voluptate enim recusandae.
          </p>
        </Content>
        <Content>
          <AirIcon />
          <h5>Momisola Hotels3</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae
            voluptate enim recusandae.
          </p>
        </Content>
      </Service>
    </div>
  );
};

const Service = styled.div`
  width: 100%;
  background-color: #191d28;
  border-left: 1px solid #2e344e;
  border-right: 1px solid #2e344e;
  border-bottom: 1px solid #2e344e;
  border-top: 8px solid #2e344e;
  transition: all 4s ease-in-out;
  display: flex;
  padding: 5rem 0;
  justify-content: space-between;
  &:hover {
    border-top: 8px solid #037fff;
  }
  @media (max-width: 1300px) {
    display: block;
    width: 100%;
    padding: 1rem;
  }
`;
const Content = styled.div`
  padding: 1rem;
  h5 {
    font-size: 1.6rem;
    font-weight: bold;
    position: relative;
    padding-bottom: 1rem;
    margin: 1rem 0;
    color: #fff;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30%;
      height: 1px;
      background-color: #2e344e;
    }
  }
  p {
    color: #fff;
  }
`;
const CctvIcon = styled(Cctv)`
  color: #fff;
  width: 70px;
`;
const BulbIcon = styled(LightbulbFill)`
  color: #fff;
  width: 70px;
`;
const AirIcon = styled(Air)`
  color: #fff;
  width: 70px;
`;

export default ServiceSection;
