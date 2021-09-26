import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 33rem;
  height: 40.5rem;

  flex-direction: column;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  margin-bottom: 2rem;
`;

export const ThumbNail = styled.img`
  width: 28.5rem;
  height: 21.7rem;
  border-radius: 1rem;
  object-fit: cover;
  margin: 2.2rem;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const Title = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-size: 2.4rem;
  text-transform: capitalize;
  margin-left: 2rem;
`;

export const SecondaryButton = styled.a`
  font-size: 1.9rem;
  font-family: 'Oswald', sans-serif;
  background: transparent;
  border: 1px solid #000;
  color: #000;
  padding: 0.5rem 4.5rem 0.55rem 4.5rem;
  width: 15.5rem;
  line-height: 1;
  margin-left: 2rem;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 4rem;

  :hover {
    background-color: #000;
    color: #fff;
  }
`;
