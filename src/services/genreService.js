import axios from 'axios';
import {
  getGenreListUrl,
  getMoviesByGenreUrl,
  getPopularListUrl,
} from '../helpers/filmAPI/getFilmList';

export const getGenreList = async () => {
  const response = await axios.get(getGenreListUrl());
  const { genres } = response.data;
  return genres || [];
};

export const getPopularList = async (page) => {
  const response = await axios.get(getPopularListUrl(page));
  const { results } = response.data;
  return results || [];
};
export const getMoviesByGenre = async (id) => {
  const response = await axios.get(getMoviesByGenreUrl(id));
  const { results } = response.data;
  return results || [];
};

