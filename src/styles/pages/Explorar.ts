import styled from 'styled-components';

export const Container = styled.div`
  width: 91.5%;
  margin: 0 auto;
  min-height: calc(100vh - 19.8rem);
`;

export const Titulo = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 3.2rem;
  color: #15222b;
  margin: 2rem 0 3rem 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PlaceHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 31rem);
`;

export const PlaceHolderText = styled.h3`
  color: #ccc;
  font-size: 2.8rem;
  text-transform: capitalize;
`;

export const PaginationContainer = styled.div`
  width: 91.5%;
  margin: 0 auto;
  padding: 2rem 0 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const PaginationButtons = styled.button`
  border: 1px solid #000;
  background-color: transparent;
  width: 85px;
  height: 28px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  text-transform: capitalize;
  margin-right: 1rem;
  cursor: pointer;
  :hover {
    background-color: #fe8402;
    color: #fff;
    border: none;
  }
`;
