import axios from "axios";

const url = import.meta.env.MOVIE_SEARCH;

export const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/",
});
