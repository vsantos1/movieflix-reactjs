import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import BackgroundPlayer from "./components/BackgroundPlayer";
import MovieCard from "./components/MovieCard";
import { moviesApi } from "./lib/api";
import Loading from "./components/Loading";
const API_KEY = import.meta.env.VITE_API_KEY;
function App() {
  const [movieData, setMovieData] = useState([]);

  const FetchMoviesData = async () => {
    await moviesApi.get(`movie?api_key=${API_KEY}`).then(({ data }) => {
      setMovieData(data.results);
    });
  };

  useEffect(() => {
    FetchMoviesData();
  }, []);
  return (
    <>
      <BackgroundPlayer />
      <Header />
      <div className="movie">
        {movieData?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
