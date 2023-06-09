import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { GoBackBtn, MovieDetailsBox } from './MovieDetalis.styled';
import AddInfo from 'components/AddInfo/AddInfo';

import * as API from '../../services/movies-api';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieDetails, setMoviesDetails] = useState({});
  const [error, setError] = useState(false);

  const { title, name, poster_path, vote_average, overview, genres } =
    movieDetails;

  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://i.postimg.cc/KYV47028/no-poster-available.jpg';

  const userScore = Math.ceil(vote_average * 10) || 0;

  let movieGenres = '';

  if (genres) {
    movieGenres = genres.map(genre => genre.name).join(' ') || '';
  }

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await API.fetchMovieDetails(movieId);
        setMoviesDetails(data);
      } catch (error) {
        setError(true);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <GoBackBtn to={backLinkLocationRef.current}>← Go back</GoBackBtn>

      {error ? (
        <p>Opps... something went wrong!</p>
      ) : (
        <>
          <MovieDetailsBox>
            <img src={moviePoster} alt="" />
            <div>
              <h2>{title || name}</h2>
              <span>User Score: {userScore}%</span>
              {overview && (
                <>
                  <h3>Overview</h3>
                  <p>{overview}</p>
                </>
              )}
              {movieGenres && (
                <>
                  <h3>Genres</h3>
                  <p>{movieGenres}</p>
                </>
              )}
            </div>
          </MovieDetailsBox>
          <AddInfo />
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
