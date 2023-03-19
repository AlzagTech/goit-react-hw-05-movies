import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../services/movies-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMoviesDetails] = useState({});

  const { title, name, poster_path, vote_average, overview, genres } =
    movieDetails;
  const userScore = Math.ceil(vote_average * 10) || 0;
  // const movieGenres = genres.map(genre => genre.name).join('');

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await API.fetchMovieDetails(movieId);
      setMoviesDetails(data);
    };

    getMovieDetails();

    return () => {
      getMovieDetails();
    };
  }, [movieId]);

  return (
    <div>
      <button type="button">Go back</button>

      <div>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
        <div>
          <h2>{title || name}</h2>
          <span>User Score: {userScore}%</span>
          <h3>Overview</h3>
          <p>{overview}</p>
          {/* {movieGenres && (
            <>
              <h3>Genres</h3>
              <p>{movieGenres}</p>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
