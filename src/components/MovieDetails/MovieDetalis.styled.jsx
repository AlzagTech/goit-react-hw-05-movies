import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackBtn = styled(NavLink)`
  display: inline-block;
  text-align: center;
  padding: 8px 16px;

  text-decoration: none;
  border-radius: 4px;

  background-color: grey;
  color: white;
  margin-bottom: 16px;
`;

export const MovieDetailsBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  img {
    width: 200px;
  }

  h2 {
    margin-bottom: 8px;
  }

  h3 {
    margin-bottom: 8px;
  }

  span {
    display: block;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 16px;
  }
`;
