import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MoviesList from 'components/MoviesList/MoviesList';
import { ListTitle } from 'components/MoviesList/MoviesList.styled';

import * as API from '../services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      const moviesArray = await API.fetchTrendingMovies();

      setMovies(moviesArray);
    };

    getTrendingMovies();

    return () => {
      getTrendingMovies();
    };
  }, []);

  return (
    <div>
      <ListTitle>Trending today</ListTitle>
      <MoviesList movies={movies} state={{ from: location }} />
    </div>
  );
};

export default Home;
