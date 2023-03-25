import { Form, FormInput, FormBtn } from '../SearchForm/SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormInput type="text" name="query" />
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

export default SearchForm;
