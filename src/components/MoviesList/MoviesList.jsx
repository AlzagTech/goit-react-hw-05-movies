import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ListItem } from './MoviesList.styled';

const MoviesList = ({ movies, state }) => {
  return (
    <div>
      <ul>
        {' '}
        <ul>
          {movies.map(movie => {
            return (
              <ListItem key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={state}>
                  {movie.name || movie.title}
                </Link>
              </ListItem>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
};

export default MoviesList;
