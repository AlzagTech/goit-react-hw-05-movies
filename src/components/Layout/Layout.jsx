import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderContainer, HeaderList, StyledLink } from './Layout.styled';
import Container from '../Container/Container';

const Layout = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </HeaderList>
      </HeaderContainer>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
