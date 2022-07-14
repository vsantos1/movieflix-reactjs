import React from "react";
import { GiTomato } from "react-icons/gi";
import { Container, Details, MovieOverview, Votes, MovieTitle, MovieImage } from "./styles";
import { AiOutlineInfoCircle } from "../../styles/Icons";

const MovieCard = ({ movie }) => {
  return (
    <Container>
      <div>
        <MovieTitle> Made with love by @vsantos1 </MovieTitle>
        <MovieImage loading="lazy" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <MovieOverview> {movie.overview} </MovieOverview>
      </div>

      <Votes>
        <GiTomato fill="#ae2012" />
        {movie.vote_average * 10 + "%"}
        <Details to={`/movie/${movie.id}`}>Detalhes</Details>
      </Votes>
    </Container>
  );
};

export default MovieCard;
