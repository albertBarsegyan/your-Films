import axios from 'axios';
import {
  getGenreListUrl,
  getMoviesByGenreUrl,
  getPopularListUrl,
  searchFilmsUrl,
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
export const getMoviesByGenre = async (id, page) => {
  const response = await axios.get(getMoviesByGenreUrl(id, page));
  const { results } = response.data;
  return results || [];
};
export const getSearchedFilms = async (query, page) => {
  const response = await axios.get(searchFilmsUrl(encodeURI(query), page));
  const { results } = response.data;
  return results || [];
};

