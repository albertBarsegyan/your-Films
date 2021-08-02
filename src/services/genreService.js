import axios from 'axios';
import {
  getGenreListUrl,
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
