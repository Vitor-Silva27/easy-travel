import React from 'react';

import Link from 'next/link';

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
  id: string;
  name: string;
  description: string;
  value: number;
  thumb: string;
}

const TripCard = ({ id, name, description, value, thumb }: PackType) => {
  return (
    <Container>
      <ThumbNail src={thumb} />
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
        <Link href={`/pacotes/${id}`}>
          <SecondaryButton>Ver mais</SecondaryButton>
        </Link>
      </ContentContainer>
    </Container>
  );
};

export default TripCard;
