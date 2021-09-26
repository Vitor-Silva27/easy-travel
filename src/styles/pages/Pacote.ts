import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  min-height: calc(100vh - 11rem);
`;

export const ContentContainer = styled.div``;

export const Back = styled.div`
  height: 19.1rem;
  width: 100vw;
  background-color: #15222b;
  position: absolute;
  top: 6rem;
  z-index: -1;
`;

export const ImageContainer = styled.div`
  width: 33rem;
  height: 44.6rem;
  margin: 3.8rem 10.8rem 0 5.6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4.4rem;
  width: max-content;
  font-family: 'Oswald', sans-serif;
  text-transform: capitalize;
  margin-top: 0.8rem;
  margin-bottom: 3rem;
`;

export const Info = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 45rem;
`;

export const InfoItem = styled.li`
  color: #fff;
  text-decoration: none;
  list-style: none;
  font-family: 'Oswald', sans-serif;
  font-size: 1.6rem;

  span {
    margin-left: 0.3rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Description = styled.p`
  max-width: 57.1rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
  margin-top: 6.8rem;
`;

export const Price = styled.h4`
  color: #0971b2;
  font-size: 1.4rem;
  margin: 4rem 0 2rem 0;
`;
