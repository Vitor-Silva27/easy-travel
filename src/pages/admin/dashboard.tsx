import React, { useContext, useEffect } from 'react';

import Router from 'next/router';

import { AuthContext } from '../../contexts/AuthContext';
import { Container, Title } from '../../styles/pages/admin/dashboard';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.is_admin === false) {
      Router.push('/');
    }
  });

  return (
    <>
      <Container>
        <Title>Dashboard</Title>
      </Container>
    </>
  );
}
