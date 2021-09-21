import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 6rem;

  display: flex;
  align-items: center;
  padding: 0 9.8rem;

  background-color: #3c444c;
`;

export const LogoContainer = styled.div`
  height: 2.3rem;
  filter: brightness(100);
`;

export const MenuContainer = styled.nav`
  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  color: #fff;
  list-style: none;

  font-family: 'Open Sans', sans-serif;
  font-size: 1.3rem;
  text-transform: uppercase;

  margin-right: 5rem;
  padding: 2rem;
  cursor: pointer;
`;

export const UserContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 3rem;
`;

export const UserPicture = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;

  margin-right: 1rem;
`;

export const Username = styled.p`
  color: #fff;

  text-transform: capitalize;

  font-family: 'Open Sans', sans-serif;

  font-size: 1.4rem;
`;

export const HeaderButton = styled.a`
  border: 0.1rem solid #fff;
  background-color: transparent;

  color: #fff;
  padding: 0.5rem 1.5rem;

  cursor: pointer;

  text-transform: uppercase;
  margin-right: 1.5rem;
  font-size: 1.2rem;
`;
