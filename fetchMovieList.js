const axios = require('axios');

const API_KEY = 'f36f23edf6e10fd2ddcf939916b1f67a';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRE_LIST = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
axios.get(GENRE_LIST).then((res) => {
  console.log(res.data);
});
