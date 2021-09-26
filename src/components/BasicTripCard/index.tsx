import React, { ReactChildren, useEffect, useState } from 'react';

import Link from 'next/link';

import api from '../../services/api';
import { Container, ThumbNail, Title, SecondaryButton } from './styles';
interface Image {
  url: string;
}
interface Trip {
  name: string;
  images: Image[];
}
interface TripProp {
  tripId: string;
}

const BasicTripCard = ({ tripId }: TripProp) => {
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    api.get(`/trip/${tripId}`).then((res) => {
      setTrip(res.data);
    });
  });

  return (
    <Container>
      <ThumbNail src={trip?.images[0].url} />
      <Title>{trip?.name}</Title>
      <Link href={`/pacotes/${tripId}`}>
        <SecondaryButton>Ver mais</SecondaryButton>
      </Link>
    </Container>
  );
};

export default BasicTripCard;
