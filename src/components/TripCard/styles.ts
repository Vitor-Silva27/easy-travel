import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 68.1rem;
  height: 21.9rem;

  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  margin-bottom: 2rem;
`;

export const ThumbNail = styled.img`
  width: 24.8rem;
  height: 18.9rem;
  border-radius: 1rem;
  object-fit: cover;
  margin: 1.5rem;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const ContentContainer = styled.div`
  width: 33rem;
  height: 18.6rem;

  margin: 1.5rem 6.8rem 1.8rem 0.5rem;
`;

export const Title = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-size: 2.4rem;
  text-transform: capitalize;
`;

export const DescriptionContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  color: #5a5a5a;
  line-height: 2rem;
  margin-top: 1.5rem;
  font-family: 'Open Sans', sans-serif;
`;

export const Price = styled.p`
  color: #22a6f9;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
  margin: 1.2rem 0 1.9rem 0;
`;

export const CardButton = styled.button`
  font-size: 1.9rem;
  border: none;
  font-family: 'Oswald', sans-serif;
  background-color: #fe8402;
  color: #fff;
  padding: 0.9rem 4.5rem 1rem 4.5rem;
  line-height: 1;
  transition: 0.2s;
  cursor: pointer;
  :disabled {
    background-color: #ccc;
    cursor: default;
    :hover {
      background-color: #ccc;
    }
  }
  :hover {
    background-color: #fb6d01;
  }
`;

export const SecondaryButton = styled.a`
  font-size: 1.9rem;
  font-family: 'Oswald', sans-serif;
  background: transparent;
  border: 1px solid #000;
  color: #000;
  padding: 0.2rem 4.5rem 0.35rem 4.5rem;
  line-height: 1;
  margin-left: 2rem;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: #000;
    color: #fff;
  }
`;
