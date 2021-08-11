import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4.4rem;
  text-transform: capitalize;
  font-family: 'Oswald', sans-serif;
  position: relative;
  color: #15222b;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 12rem;
    height: 3px;
    background-color: #0971b2;
  }
`;
