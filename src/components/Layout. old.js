import { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>

      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
