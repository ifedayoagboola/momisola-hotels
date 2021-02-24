import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo>MOMISOLA hotels</Logo>
      </Link>
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
    </Nav>
  );
};

const Nav = styled.div`
  height: 5rem;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  position: fixed;
  top: 20;
  width: 100%;
`;
const NavMenu = styled.div`
  margin-right: -48px;
  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin-left: 3rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    padding: 0;
  }
`;
const Logo = styled.h1`
  font-style: italic;
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

export default Navbar;
