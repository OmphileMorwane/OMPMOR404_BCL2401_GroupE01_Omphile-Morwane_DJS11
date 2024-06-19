import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";

const MenuContainer = styled.div``;
const Logo = styled.div``;
const Close = styled.div``;
const Elements = styled.div``;
const NavText = styled.div``;

const Sidebar = () => {
  return (
    <MenuContainer>
      <Logo></Logo>
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
