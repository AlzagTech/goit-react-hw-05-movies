import styled from 'styled-components';

export const ReviewItem = styled.li`
  padding: 20px;

  background-color: #efc8c8;

  border-radius: 4px;

  & + & {
    margin-top: 20px;
  }

  p + p {
    margin-top: 8px;
  }
`;
