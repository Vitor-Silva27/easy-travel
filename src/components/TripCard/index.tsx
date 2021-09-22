import React from 'react';

import {
  CardButton,
  Container,
  ContentContainer,
  Description,
  DescriptionContainer,
  Price,
  SecondaryButton,
  ThumbNail,
  Title,
} from './styles';

interface PackType {
  name: string;
  description: string;
  value: number;
}

const TripCard = ({ name, description, value }: PackType) => {
  return (
    <Container>
      <ThumbNail src="https://github.com/Vitor-Silva27.png" />
      <ContentContainer>
        <Title>{name}</Title>
        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
        <Price>
          {value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Price>
        <CardButton>Comprar</CardButton>
        <SecondaryButton>Ver mais</SecondaryButton>
      </ContentContainer>
    </Container>
  );
};

export default TripCard;
