import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";

//import icons
import { Bars } from "@styled-icons/fa-solid";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">MOMISOLA hotels</Logo>

      <NavMenu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Bookings</Link>
          </li>
        </ul>
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
      <ToggleBars />
    </Nav>
  );
};
const ToggleBars = styled(Bars)`
  color: #fff;
  width: 1.5rem;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-80%, 50%);
  }
`;
const Nav = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  position: fixed;
  width: 100%;
  z-index: 100;
`;
const NavMenu = styled.div`
  margin-right: -48px;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    margin-left: 3rem;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.h1`
  font-style: italic;
  color: #fff;
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Navbar;
