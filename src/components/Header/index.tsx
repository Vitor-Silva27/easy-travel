import React, { useContext } from 'react';

import Router from 'next/router';
import nookies from 'nookies';

import { AuthContext } from '../../contexts/AuthContext';
import {
  Container,
  LogoContainer,
  HeaderButton,
  Menu,
  UserContainer,
  UserPicture,
  Username,
  MenuContainer,
  MenuItem,
} from './styles';

const Header = () => {
  const { user } = useContext(AuthContext);
  function handleClick(e: any, path: string) {
    e.preventDefault();
    Router.push(path);
  }

  function handleLogOut(e: any) {
    e.preventDefault();
    nookies.destroy(null, 'easytravel-token');
    Router.push('/login');
  }

  return (
    <Container>
      <LogoContainer>
        <img src="./assets/logo.svg" alt="Logo easyTravel" />
      </LogoContainer>
      <MenuContainer>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>explorar</MenuItem>
          <MenuItem>minhas viagens</MenuItem>
          <MenuItem>sobre</MenuItem>
        </Menu>
      </MenuContainer>
      {user ? (
        <UserContainer>
          <UserPicture src="https://github.com/Vitor-Silva27.png" />
          <Username>{user.username}</Username>
        </UserContainer>
      ) : (
        <HeaderButton onClick={(e) => handleClick(e, '/login')}>
          login
        </HeaderButton>
      )}
      {user ? (
        <HeaderButton onClick={(e) => handleLogOut(e)}>log out</HeaderButton>
      ) : (
        <HeaderButton onClick={(e) => handleClick(e, '/cadastro')}>
          cadastre-se
        </HeaderButton>
      )}
    </Container>
  );
};

export default Header;
