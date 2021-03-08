import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Times } from "@styled-icons/fa-solid/Times";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
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
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="tue" to="/Contact">
            Contact
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(Times)`
  color: #000d1a;
  width: 1.3rem;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 30px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-80%, 50%);
  }
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const NavMenu = styled.div`
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #000d1a;
    }
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default Dropdown;
