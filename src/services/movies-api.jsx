import axios from 'axios';

const API_KEY = 'd892969fd580e8f0dbedefcab33e9ce9';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);

  return response.data.results;
};

// api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=asd&page=1&include_adult=false

export const fetchSearchMovies = async searchQuery => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );

  return response.data;
};

export const fetchMovieDetails = async movie_id => {
  const response = await axios.get(
    `movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchMovieCredits = async movie_id => {
  const response = await axios.get(
    `movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchMovieReviews = async movie_id => {
  const response = await axios.get(
    `movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};
