import React from "react";
import styled from "styled-components";
import Bar from "../images/mom4.jpeg";
import kings from "../images/mom14.jpeg";
import mom8 from "../images/mom8.jpeg";
import queens from "../images/mom1.jpeg";
import royals from "../images/mom18.jpeg";
import room15 from "../images/mom9.jpeg";
import HomeSection4 from "../components/HomeSection4";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      <Mother>
        <Grid>
          <GridItem>
            <Card>
              <img src={queens} alt="" />
              <Content>
                <h1>Queens Room</h1>
                <p>
                  Room deliberately set to treat you like a queen that you are
                </p>
                <Button>Book now</Button>
              </Content>
            </Card>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem>
            <Card>
              <img src={kings} alt="" />
              <Content>
                <h1>Kings Room</h1>
                <p>At Momisola Hotels, you are not lesser than a king.</p>
                <Button>Book now</Button>
              </Content>
            </Card>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem>
            <Card>
              <img src={royals} alt="" />
              <Content>
                <h1>Royal Suite</h1>
                <p>
                  The best of the suites. Feels nothing less than your home.
                </p>
                <Button>Book now</Button>
              </Content>
            </Card>
          </GridItem>
        </Grid>
      </Mother>
      <Mother>
        <Grid>
          <GridItem>
            <Card>
              <img src={Bar} alt="" />
              <Content>
                <h1>Kitchen and Bar</h1>
                <p>Drinks, local and international dishes, just a call away.</p>
                <Button>Book now</Button>
              </Content>
            </Card>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem>
            <Card>
              <img src={mom8} alt="" />
              <Content>
                <h1>Long term lodge</h1>
                <p>Discounts on all lodges for more than three months.</p>
                <Button>Book now</Button>
              </Content>
            </Card>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem>
            <Card>
              <img src={room15} alt="" />
              <Content>
                <h1>Suites & Rooms</h1>
                <p>
                  Fully Air-conditioned with Cable TV, internet and LAN phone
                  installed
                </p>
                <Button>Book now</Button>
              </Content>
            </Card>
          </GridItem>
        </Grid>
      </Mother>
      <HomeSection4 />
      <Footer />
    </div>
  );
};

const Mother = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000d1a;
  padding: 10rem 0 0;
  @media (max-width: 1300px) {
    display: block;
    padding: 5rem 0 0;
  }
`;
const Grid = styled.div`
  display: grid;
  padding: 0 5rem;
  width: 20em;
  padding: 1rem;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  align-items: start;
  @media (max-width: 1300px) {
    grid-gap: 3rem;
    width: 100%;
  }
`;
const GridItem = styled.div`
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
  }
`;
const Card = styled.div`
  img {
    display: block;
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;
const Content = styled.div`
  padding: 1rem;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #0d0d0d;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    line-height: 1.5;
    color: #3d3d3d;
    margin-bottom: 1.5rem;
  }
`;
const Button = styled.div`
  display: block;
  width: 100%;
  padding: 1.5rem;
  font-size: 1rem;
  text-align: center;
  color: #3363ff;
  background-color: #d8e0fd;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
  letter-spacing: 0.1rem;
  &:hover,
  :active {
    background-color: #c2cffc;
  }
`;

export default Services;
