import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as API from '../services/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name || movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
