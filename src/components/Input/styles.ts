import styled from 'styled-components';

export const Form_input = styled.input`
  border: none;
  background-color: transparent;
  width: 55rem;
  height: 3rem;
  border-bottom: 1px solid #70787d;
  padding-left: 3rem;

  &::placeholder {
    position: absolute;
    left: 3.2rem;
    bottom: 0.8rem;

    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 0.8;
    font-weight: 700;
    text-transform: capitalize;

    color: rgba(21, 34, 43, 60%);
  }

  &:focus {
    outline: none;
    border-color: #22a6f9;
  }
`;

export const Label = styled.label`
  display: none;
`;

export const Input_wrapper = styled.div`
  position: relative;
  margin: 4rem 0 0 0;
`;

export const Input_icon = styled.img`
  position: absolute;
  bottom: 0.8rem;
  left: 0.2rem;
`;
