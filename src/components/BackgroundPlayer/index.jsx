import React from "react";

import { BackgroundImg, ImageTittle, Container, MovieContent, ButtonsContent, Sinopse, LinkButton, InformationIcon, PlayIcon, InformationButton } from "./styles";

const BackgroundPlayer = () => {
  return (
    <Container>
      <BackgroundImg />

      <MovieContent>
        <ImageTittle src="https://occ-0-1896-3852.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcgQSKD70hfPg4t_w6l_5kvm68YUJA0vkqRiFydmwndlU9BdlVShakNdumM29eSEc7VySv4ClrU8IEAyUd1ZEQYObzHKkg4a2mHv-0Cf5pu4.webp?r=" />

        <ButtonsContent>
          <LinkButton to="/movie/3">
            <PlayIcon /> Assistir
          </LinkButton>
          <InformationButton to="/movie/4">
            <InformationIcon /> Mais Informações
          </InformationButton>
        </ButtonsContent>
      </MovieContent>
    </Container>
  );
};

export default BackgroundPlayer;
