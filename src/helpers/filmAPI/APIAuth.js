// api const
const API_KEY = () => 'f36f23edf6e10fd2ddcf939916b1f67a';
const BASE_URL = () => 'https://api.themoviedb.org/3';
const AUTH = (API_KEY) => `?api_key=${API_KEY}&language=en-US`;
const GENRE_LIST = () => `${BASE_URL()}/genre/movie/list${AUTH(API_KEY())}`;
const DISCOVER_MOVIES = () => '/discover/movie';
const BY_GENRES = (genreId) => `&with_genres=${genreId}`;

export const getGenreListURL = () => GENRE_LIST();
export const getMoviesByGenre = (genreId) =>
  `${BASE_URL()}${DISCOVER_MOVIES()}${AUTH(API_KEY())}${BY_GENRES(genreId)}`;
