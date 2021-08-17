import styled, { keyframes } from 'styled-components';

const formEnter = keyframes`
  from {
    transform: translateY(-100%)
  }
  to {
    top: initial
  }
`;

const imageEnter = keyframes`
  from {
    transform: translateY(100%)
  }
  to {
    top: initial
  }
`;

export const Form = styled.form`
  margin-top: 6rem;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  padding: 8rem 0 0 11.8rem;
  animation: ${formEnter} 0.7s ease-out;

  button {
    margin-top: 9rem;
    margin-bottom: 4rem;
  }

  .logo {
    margin-bottom: 6rem;
  }
`;

export const LoginImage = styled.img`
  height: 100vh;
  width: 71rem;

  animation: ${imageEnter} 0.7s ease-out;
`;

export const DontHave = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;

  cursor: pointer;

  span {
    color: #0971b2;
  }
`;
