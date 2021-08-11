import styled from 'styled-components';

export const Form_input = styled.input`
  border: none;
  background-color: transparent;
  width: 55rem;
  height: 3rem;
  border-bottom: 1px solid #70787d;

  &::placeholder {
    padding-left: 3.2rem;
    color: #70787d;
    text-transform: capitalize;
    font-weight: 700;
  }
`;

export const Label = styled.label`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 2px;
    top: -6px;
    width: 16px;
    height: 17px;
    background: url('./assets/user_icon.svg') no-repeat;
  }
`;
