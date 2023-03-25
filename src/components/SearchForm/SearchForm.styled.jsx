import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  padding: 8px;

  border: none;
  outline: none;
  border-radius: 4px 0 0 4px;

  background-color: #dad7d7;

  font-size: 16px;
`;

export const FormBtn = styled.button`
  padding: 8px 16px;

  border: none;
  border-radius: 0 4px 4px 0;

  background-color: #bbb5b5;
  cursor: pointer;

  font-size: 16px;

  &:hover {
    background-color: #beaaaa;
  }
`;
