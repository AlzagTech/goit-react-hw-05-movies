import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../services/movies-api';

import { ReviewItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMoviesReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await API.fetchMovieReviews(movieId);
        setMoviesReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          movieReviews.map(item => (
            <ReviewItem key={item.id}>
              <p>Author: {item.author}</p>
              <p> {item.content}</p>
            </ReviewItem>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
