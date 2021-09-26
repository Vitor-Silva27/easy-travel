import React, { useContext } from 'react';

import Link from 'next/link';
import Router from 'next/router';

import { AuthContext } from '../../contexts/AuthContext';
import api from '../../services/api';
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
  const { user } = useContext(AuthContext);

  async function handleClick() {
    await api.post('/user/buy', {
      tripId: id,
      userId: user?.id,
    });
    alert(`Viagem ${name} comprada com sucesso!`);
    Router.push('/');
  }

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
        {user ? (
          <CardButton onClick={handleClick}>Comprar</CardButton>
        ) : (
          <CardButton disabled>Comprar</CardButton>
        )}
        <Link href={`/pacotes/${id}`}>
          <SecondaryButton>Ver mais</SecondaryButton>
        </Link>
      </ContentContainer>
    </Container>
  );
};

export default TripCard;
