import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";
import LogoImage from "./Images/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  // @media (max-width: 1100px) {
  // position: fixed;
  // z-index: 1000;
  // width: 100%;
  // max-width: 250px;
  // left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
  // transition: 0.3s ease-in-out;
  // }
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;
const Image = styled.img`
  height: 40px;
`;
const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;
const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;
const NavText = styled.div`
  padding: 12px 0px;
`;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          Code Talks!
        </Logo>
        <Close>
          <CloseRounded />
        </Close>
      </Flex>
      <Link>
      <Elements>
        <HomeRounded />
        <NavText>Dashboard</NavText>
      </Elements>
      </Link>
    </MenuContainer>
  );
};

export default Sidebar;
