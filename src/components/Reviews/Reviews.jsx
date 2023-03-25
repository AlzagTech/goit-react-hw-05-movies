import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../services/movies-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMoviesReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await API.fetchMovieReviews(movieId);
        setMoviesReviews(data.results);
        console.log(data.results);
      } catch (error) {
        // setError(true);
        console.log(error);
      }
    };

    getMovieReviews();

    return () => {
      getMovieReviews();
    };
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.map(item => (
          <li key={item.id}>
            <p>Author: {item.author}</p>
            <p> {item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
