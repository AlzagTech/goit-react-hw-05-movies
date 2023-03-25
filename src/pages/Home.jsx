import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';

import * as API from '../services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      const moviesArray = await API.fetchTrendingMovies();
      console.log(moviesArray);

      setMovies(moviesArray);
    };

    getTrendingMovies();

    return () => {
      getTrendingMovies();
    };
  }, []);

  return (
    <div>
      <TrendingMoviesList movies={movies} state={{ from: location }} />
    </div>
  );
};

export default Home;
