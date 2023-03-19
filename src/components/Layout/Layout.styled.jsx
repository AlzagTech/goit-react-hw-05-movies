import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 24px;

  border-bottom: 1px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 20px;

  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;

  text-decoration: none;
  color: #212121;

  &.active {
    color: #c86588;
  }

  &:hover {
    text-decoration: underline;
  }
`;
