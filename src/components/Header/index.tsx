import React from 'react';

import {
  Container,
  LogoContainer,
  Logout,
  Menu,
  UserContainer,
  UserPicture,
  Username,
  MenuContainer,
  MenuItem,
} from './styles';

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <img src="./assets/logo.svg" alt="Logo easyTravel" />
      </LogoContainer>
      <MenuContainer>
        <Menu>
          <MenuItem>explorar</MenuItem>
          <MenuItem>minhas viagens</MenuItem>
          <MenuItem>sobre</MenuItem>
        </Menu>
      </MenuContainer>

      <UserContainer>
        <UserPicture src="https://github.com/Vitor-Silva27.png" />
        <Username>vitor silva</Username>
      </UserContainer>

      <Logout />
    </Container>
  );
};

export default Header;
