import styled from 'styled-components';

export const ListTitle = styled.h1`
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  & + & {
    margin-top: 8px;
  }

  a:visited {
    color: #0000ee;
  }
`;
