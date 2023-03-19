import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderContainer, HeaderList, StyledLink } from './Layout.styled';

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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
