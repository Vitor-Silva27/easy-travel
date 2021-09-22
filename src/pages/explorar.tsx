import Footer from '../components/Footer';
import Header from '../components/Header';
import TripCard from '../components/TripCard';
import api from '../services/api';
import { CardsContainer, Container, Titulo } from '../styles/pages/Explorar';

interface PackType {
  id: string;
  name: string;
  description: string;
  value: number;
}

export default function Explorar({ packages }: { packages: PackType[] }) {
  return (
    <>
      <Header />
      <Container>
        <Titulo>Vamos achar sua proxima viagem inesquecivel!</Titulo>
        <CardsContainer>
          {packages.map((trip: PackType) => (
            <TripCard
              key={trip.id}
              name={trip.name}
              description={trip.description}
              value={trip.value}
            />
          ))}
        </CardsContainer>
      </Container>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await api.get('/trips');
  const packages: PackType[] = await res.data;
  return {
    props: {
      packages,
    },
  };
};
