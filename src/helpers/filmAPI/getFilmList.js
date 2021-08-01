import { API_KEY, AUTH, BASE_URL } from './APIAuth';
import { popularList } from './filmTypesUrls';

export const DISCOVER_MOVIES = () => '/discover/movie';
export const BY_GENRES = (genreId) => `&with_genres=${genreId}`;
// genre list
export const getGenreList = () =>
  `${BASE_URL()}/genre/movie/list${AUTH(API_KEY())}`;
// get popular films list
export const getPopularList = () =>
  `${BASE_URL()}${popularList()}${AUTH(API_KEY())}`;
// get by genre
export const getMoviesByGenre = (genreId) =>
  `${BASE_URL()}${DISCOVER_MOVIES()}${AUTH(API_KEY())}${BY_GENRES(genreId)}`;
