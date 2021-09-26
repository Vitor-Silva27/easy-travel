import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import TripCard from '../components/TripCard';
import api from '../services/api';
import {
  CardsContainer,
  Container,
  PaginationButtons,
  PaginationContainer,
  PlaceHolder,
  PlaceHolderText,
  Titulo,
} from '../styles/pages/Explorar';

interface Image {
  url: string;
}
interface PackType {
  id: string;
  name: string;
  description: string;
  value: number;
  images: Image[];
}

export default function Explorar() {
  const [page, setPage] = useState(1);
  const [packages, setPackages] = useState<PackType[]>([]);
  useEffect(() => {
    api.get(`/trips?limit=6&page=${page}`).then((res) => {
      const trips: PackType[] = res.data;
      setPackages(trips);
    });
  }, [page]);

  return (
    <>
      <Header />
      <Container>
        <Titulo>Vamos achar sua proxima viagem inesquecivel!</Titulo>
        {packages.length > 0 ? (
          <CardsContainer>
            {packages.map((trip: PackType) => (
              <TripCard
                id={trip.id}
                key={trip.id}
                name={trip.name}
                description={trip.description}
                value={trip.value}
                thumb={trip.images[0]?.url}
              />
            ))}
          </CardsContainer>
        ) : (
          <PlaceHolder>
            <PlaceHolderText>
              não há pacotes disponiveis no momento :(
            </PlaceHolderText>
          </PlaceHolder>
        )}
      </Container>
      <PaginationContainer>
        {page > 1 && (
          <PaginationButtons onClick={() => setPage(page - 1)}>
            voltar
          </PaginationButtons>
        )}
        {packages.length > 0 && (
          <PaginationButtons onClick={() => setPage(page + 1)}>
            avancar
          </PaginationButtons>
        )}
      </PaginationContainer>
      <Footer />
    </>
  );
}
