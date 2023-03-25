const SearchForm = ({ onSubmit }) => {
  // const handleSubmit = (values, actions) => {
  //   onSubmit(values.query);
  //   actions.resetForm();
  // };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
