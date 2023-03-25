import styled from 'styled-components';

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 20px;
  max-width: 240px;

  background-color: #dfdbda;
  border-radius: 4px;
  text-align: center;

  & + & {
    margin-top: 20px;
  }

  img {
    margin-bottom: 16px;
    border-radius: 4px;
  }
`;
