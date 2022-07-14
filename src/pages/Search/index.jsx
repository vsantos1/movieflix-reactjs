import React, { useEffect, useState } from "react";
import BackgroundPlayer from "../../components/BackgroundPlayer";
import { Header } from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";

const API_KEY = import.meta.env.VITE_API_KEY;
const MOVIE_SEARCH = import.meta.env.VITE_MOVIE_SEARCH;

const search = () => {
  let [searchParams] = useSearchParams();
  const [movieData, setMovieData] = useState([]);
  let query = searchParams.get("q");
  const [isFetching, setIsFetching] = useState(true);

  const FetchMoviesData = async () => {
    setIsFetching(true);

    await axios.get(`${MOVIE_SEARCH}api_key=${API_KEY}&query=${query}`).then(({ data }) => {
      setTimeout(() => {
        setMovieData(data.results);

        setIsFetching(false);
      }, 5000);
    });
  };

  useEffect(() => {
    FetchMoviesData();
  }, [query]);

  return (
    <>
      <BackgroundPlayer />
      <Header />

      {isFetching ? (
        <Loading />
      ) : (
        <>
          <div className="movie">
            {movieData?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default search;
