import { useContext } from 'react';

import BasicTripCard from '../components/BasicTripCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AuthContext } from '../contexts/AuthContext';
import {
  CardsContainer,
  Container,
  PlaceHolder,
  Title,
} from '../styles/pages/MinhasViagens';
export default function Explorar() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Header />
      <Container>
        <Title>Minhas Viagens</Title>
        {user ? (
          <CardsContainer>
            {user?.trips.map((trip) => (
              <BasicTripCard key={trip.trip_id} tripId={trip.trip_id} />
            ))}
          </CardsContainer>
        ) : (
          <PlaceHolder>Faça login e veja suas viagens!</PlaceHolder>
        )}
      </Container>
      <Footer />
    </>
  );
}
