import styled from 'styled-components';

export const Container = styled.div`
  width: 103rem;
  margin: 0 auto;
  min-height: calc(100vh - 13rem);
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 3.2rem;
  color: #15222b;
  margin: 2rem 0 3rem 0;
`;

export const PlaceHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 31rem);

  color: #ccc;
  font-size: 2.8rem;
`;
