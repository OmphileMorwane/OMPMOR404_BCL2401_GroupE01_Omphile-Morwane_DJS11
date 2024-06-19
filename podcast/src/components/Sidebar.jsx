import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";

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
const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;
const Close = styled.div``;
const Elements = styled.div``;
const NavText = styled.div``;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Logo>Podcast!!!</Logo>
      <Close>
        <CloseRounded />
      </Close>
      <Elements>
        <HomeRounded />
        <NavText>Dashboard</NavText>
      </Elements>
    </MenuContainer>
  );
};

export default Sidebar;
