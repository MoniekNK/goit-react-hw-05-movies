import axios from 'axios';

const API_KEY = '5b543a7de6534fa02efb137645eb3774';
const BASE_URL = 'https://api.themoviedb.org/3/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const fetchTrendingMovies = async () => {
  const response = await axiosInstance.get('trending/movie/day');
  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const response = await axiosInstance.get('search/movie', {
    params: {
      query: query,
      page: 1,
      include_adult: false,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axiosInstance.get(`movie/${id}`);
  return response.data;
};

export const fetchMovieCast = async id => {
  const response = await axiosInstance.get(`movie/${id}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const response = await axiosInstance.get(`movie/${id}/reviews`, {
    params: {
      page: 1,
    },
  });
  return response.data.results;
};

export default axiosInstance;
