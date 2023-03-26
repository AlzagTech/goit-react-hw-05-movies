import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, FormInput, FormBtn } from '../SearchForm/SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value) {
      onSubmit(value);
    }

    setValue('');

    return;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput type="text" value={value} onChange={handleChange} autoFocus />
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
