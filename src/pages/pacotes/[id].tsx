import { useContext, useEffect, useState } from 'react';

import Router, { useRouter } from 'next/router';

import Footer from '../../components/Footer';
import { Button } from '../../components/FormButton/styles';
import Header from '../../components/Header';
import { ContentContainer } from '../../components/TripCard/styles';
import { AuthContext } from '../../contexts/AuthContext';
import api from '../../services/api';
import {
  Container,
  Back,
  Description,
  ImageContainer,
  Info,
  InfoItem,
  Price,
  Title,
} from '../../styles/pages/Pacote';

interface Image {
  id: string;
  filename: string;
  url: string;
}

interface Package {
  name: string;
  description: string;
  value: number;
  location: string;
  language: string;
  duration: string;
  images: Image[];
}

export default function Pacote() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;
  const [trip, setTrip] = useState<Package | null>(null);

  useEffect(() => {
    api.get(`/trip/${id}`).then((res) => {
      setTrip(res.data);
    });
  }, [id]);

  async function handleClick() {
    const res = await api.post('/user/buy', {
      tripId: id,
      userId: user?.id,
    });
    alert(`Viagem ${trip?.name} comprada com sucesso!`);
    Router.push('/');
  }

  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          <img
            src={trip?.images[0]?.url || '/assets/login-img.png'}
            alt={trip?.name}
          />
        </ImageContainer>
        <Back />
        <ContentContainer>
          <Title>{trip?.name}</Title>
          <Info>
            <InfoItem>
              Local: <span>{trip?.location}</span>
            </InfoItem>
            <InfoItem>
              Lingua: <span>{trip?.language}</span>
            </InfoItem>
            <InfoItem>
              Duração: <span>{trip?.duration}</span>
            </InfoItem>
          </Info>

          <Description>{trip?.description}</Description>
          <Price>
            {trip?.value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Price>
          {user ? (
            <Button onClick={handleClick}>Comprar agora</Button>
          ) : (
            <Button disabled>entre para comprar</Button>
          )}
        </ContentContainer>
      </Container>
      <Footer />
    </>
  );
}
