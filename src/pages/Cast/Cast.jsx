import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../services/movies-api';

import { CastItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMoviesCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await API.fetchMovieCredits(movieId);
        setMoviesCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCast.length === 0 ? (
          <p>We don't have any cast for this movie.</p>
        ) : (
          movieCast.map(item => (
            <CastItem key={item.id + item.cast_id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                    : 'https://i.ibb.co/FH0M7fB/Untitled-design.jpg'
                }
                alt=""
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </CastItem>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;
