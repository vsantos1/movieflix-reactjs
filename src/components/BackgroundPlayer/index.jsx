import React from "react";

import { BackgroundImg, ImageTittle, Container, MovieContent, ButtonsContent, LinkButton, InformationIcon, PlayIcon, InformationButton } from "./styles";

const BG_SEARCH = import.meta.env.VITE_BG_ORIGINAL;
const POSTER = import.meta.env.VITE_DOCTOR_BG;

const BackgroundPlayer = () => {
  return (
    <Container>
      <BackgroundImg src={`${BG_SEARCH}/${POSTER}`} />

      <MovieContent>
        <ImageTittle src="/nwh.png" alt="Spider-Man:No way home available" />

        <ButtonsContent>
          <LinkButton to="/">
            <PlayIcon /> Assistir
          </LinkButton>
          <InformationButton to="/">
            <InformationIcon /> Mais Informações
          </InformationButton>
        </ButtonsContent>
      </MovieContent>
    </Container>
  );
};

export default BackgroundPlayer;
