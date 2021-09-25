import React, { useContext } from 'react';

import Link from 'next/link';
import Router from 'next/router';
import nookies from 'nookies';

import { AuthContext } from '../../contexts/AuthContext';
import {
  Container,
  LogoContainer,
  HeaderButton,
  Menu,
  UserContainer,
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
        <img src="/assets/logo.svg" alt="Logo easyTravel" />
      </LogoContainer>
      <MenuContainer>
        <Menu>
          <Link href="/">
            <MenuItem>Home</MenuItem>
          </Link>

          <Link href="/explorar">
            <MenuItem>explorar</MenuItem>
          </Link>

          <Link href="/">
            <MenuItem>minhas viagens</MenuItem>
          </Link>

          <Link href="/">
            <MenuItem>sobre</MenuItem>
          </Link>
        </Menu>
      </MenuContainer>
      {user ? (
        <UserContainer>
          <Username>Bem vindo, {user.username}</Username>
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
