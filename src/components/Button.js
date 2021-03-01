import styled from "styled-components";

export const Button = styled.a`
  background: ${({ primary }) => (primary ? "#000d1a" : "cd853f")};
  background: ${({ secondary }) => (secondary ? "#CF843A" : "cd853f")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  padding: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  color: ${({ secondary }) => (secondary ? "#000D1A" : "#fff")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
