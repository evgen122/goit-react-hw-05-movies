import axios from 'axios';

const key = 'api_key=9ad4d94cf88f6011a6f91c12beaa36d6';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrending = async () => {
  const response = await axios.get(`/trending/all/day?${key}&language=en-US`);
  return response.data;
};

export const fetchSearchMovies = async filter => {
  const response = await axios.get(
    `/search/movie?${key}&query=${filter}&include_adult=false&language=en-US`
  );
  return response.data;
};

export const fetchMoviesDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?${key}&language=en-US`);
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?${key}&language=en-US`
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?${key}&language=en-US`
  );
  return response.data;
};
