import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import * as API from '../services/movies-api';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    const getSearchMovies = async () => {
      try {
        const data = await API.fetchSearchMovies(query);

        setSearchMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getSearchMovies();
  }, [query]);

  const handleSubmit = searchQuery => {
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    }

    return;
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {searchMovies && (
        <MoviesList movies={searchMovies} state={{ from: location }} />
      )}
    </>
  );
};

export default Movies;
