const API_KEY = "42916dd44acfe0e500abc119a63131d6"; //api key from TMDB

//request parameters to fetch all genre movies
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  trailerQuery: `/videos?api_key=${API_KEY}`,
};

export default requests;
