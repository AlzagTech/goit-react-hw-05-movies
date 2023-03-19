import axios from 'axios';

const API_KEY = 'd892969fd580e8f0dbedefcab33e9ce9';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);

  return response.data.results;
};

export const fetchMovieDetails = async movie_id => {
  const response = await axios.get(
    `movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};
