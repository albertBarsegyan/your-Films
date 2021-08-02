// api const
export const API_KEY = () => 'f36f23edf6e10fd2ddcf939916b1f67a';
export const BASE_URL = () => 'https://api.themoviedb.org/3';
export const AUTH = (API_KEY) => `?api_key=${API_KEY}&language=en-US`;
export const getImage = (imgPath) =>
  `https://image.tmdb.org/t/p/w500${imgPath}`;