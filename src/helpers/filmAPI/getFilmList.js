import { API_KEY, AUTH, BASE_URL } from './APIAuth';
import { popularList, search } from './filmTypesUrls';

export const DISCOVER_MOVIES = () => '/discover/movie';
// get films by genre id
export const BY_GENRES = (genreId) => `&with_genres=${genreId}`;
// genre list url
export const getGenreListUrl = () =>
  `${BASE_URL()}/genre/movie/list${AUTH(API_KEY())}`;
// get popular films list
export const getPopularListUrl = (page) =>
  `${BASE_URL()}${popularList()}${AUTH(API_KEY())}&language=en-US&page=${page}`;
// get by genre
export const getMoviesByGenreUrl = (genreId, page) =>
  `${BASE_URL()}${DISCOVER_MOVIES()}${AUTH(API_KEY())}${BY_GENRES(
    genreId
  )}&page=${page}`;

export const searchFilmsUrl = (query, page) => {
  return `${BASE_URL()}${search()}${AUTH(
    API_KEY()
  )}&language=en-US&page=${page}&include_adult=false&query=${query}`;
};
