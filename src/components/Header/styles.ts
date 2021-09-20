import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9.8rem;

  background-color: #15222b;
`;

export const LogoContainer = styled.div`
  height: 2.3rem;
`;

export const MenuContainer = styled.nav``;

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
  align-items: center;
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

  font-size: 1.2rem;
`;

export const Logout = styled.button`
  border: 0.1rem solid #fff;
  background-color: transparent;

  color: #fff;
  padding: 0.3rem 1rem;

  cursor: pointer;

  text-transform: uppercase;
`;
