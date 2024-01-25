import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const {
    data: { results },
  } = await axios.get('/trending/all/day', {
    params: { api_key: 'c1263daaf77d1dca7e844442784bef96' },
  });
  return results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: { api_key: 'c1263daaf77d1dca7e844442784bef96' },
  });
  return data;
};
export const getMovieByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(`search/movie`, {
    params: { query: query, api_key: 'c1263daaf77d1dca7e844442784bef96' },
  });
  return results;
};

export const getMovieCredits = async movie_id => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${movie_id}/credits`, {
    params: { api_key: 'c1263daaf77d1dca7e844442784bef96' },
  });
  return cast;
};

export const getMovieReviews = async movie_id => {
  const {
    data: { results },
  } = await axios.get(`/movie/${movie_id}/reviews`, {
    params: { api_key: 'e6063733392c5a83365cb21715c07af9' },
  });

  return results;
};