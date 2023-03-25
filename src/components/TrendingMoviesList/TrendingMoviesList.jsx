import { Link } from 'react-router-dom';

import { ListTitle, ListItem } from './TrendingMoviesList.styled';

const TrendingMoviesList = ({ movies, state }) => {
  return (
    <div>
      <ListTitle>Trending today</ListTitle>

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

export default TrendingMoviesList;
