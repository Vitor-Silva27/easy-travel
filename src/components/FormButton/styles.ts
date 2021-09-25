import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24.2rem;
  height: 4.5rem;
  background-color: #fe8402;
  border: none;
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-size: 1.9rem;
  cursor: pointer;
  text-align: center;
  :disabled {
    background-color: #ccc;
    cursor: default;
    &:hover {
      background-color: #ccc;
    }
  }
  &:hover {
    background-color: #e57600;
  }
`;
