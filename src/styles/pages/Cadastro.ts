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

export const CadastroWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  overflow: hidden;
`;

export const FormWrapper = styled.div`
  padding: 8rem 10.7rem 0 0;

  animation: ${formEnter} 0.7s ease-out;
  width: 45%;
  button {
    margin-top: 7.5rem;
    margin-bottom: 4rem;
  }

  .logo {
    margin-bottom: 6rem;
  }

  @media (max-width: 700px) {
    padding: 8rem 0 0 0;
    width: 85%;
    margin: 0 auto;
  }
  @media (max-width: 426px) {
    .logo {
      display: block;
      margin: 0 auto 4rem auto;
    }

    h1 {
      display: block;
      width: fit-content;
      margin: 0 auto;
      &::after {
        left: 15%;
      }
    }
    button {
      margin: 8rem auto 4rem auto;
    }
  }
`;

export const CadastroImage = styled.img`
  height: 100vh;
  width: 50%;
  object-fit: cover;
  animation: ${imageEnter} 0.7s ease-out;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const AlreadyHave = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;

  cursor: pointer;

  span {
    color: #0971b2;
  }

  @media (max-width: 426px) {
    text-align: center;
  }
`;
