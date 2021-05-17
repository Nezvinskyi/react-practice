import axios from 'axios';
const API_KEY = '4b778d4c29fb731b86ff7a9149d1de58';

export const searchMovies = query =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
    )
    .then(({ data }) => data);
