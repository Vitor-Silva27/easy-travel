import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
  font-family: 'Oswald', sans-serif;
  position: relative;
  color: #15222b;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 10rem;
    height: 0.3rem;
    background-color: #0971b2;
  }
`;
