import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import api from '../../services/api';

interface Image {
  id: string;
  filename: string;
  url: string;
}

interface Package {
  name: string;
  description: string;
  value: number;
  images: Image[];
}

export default function Pacote() {
  const router = useRouter();
  const { id } = router.query;
  const [trip, setTrip] = useState<Package | null>(null);

  useEffect(() => {
    api.get(`/trip/${id}`).then((res) => {
      setTrip(res.data);
    });
  }, [id]);

  return (
    <>
      <Header />
      <h1>{trip?.name}</h1>
      <img src={trip?.images[0].url} alt="" />
      <Footer />
    </>
  );
}
