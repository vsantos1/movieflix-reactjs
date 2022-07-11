import React, { useState } from "react";
import { Container, MobileWrapper, MobileNavigate, MenuTrigger, MenuIconOpen, MenuIconClose } from "./styles";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMobileMenu() {
    setIsMenuOpen(true);
  }
  function disableMobileMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <MenuTrigger onMouseEnter={openMobileMenu}>
        Navegar
        {isMenuOpen ? <MenuIconClose /> : <MenuIconOpen />}
      </MenuTrigger>
      {isMenuOpen ? (
        <>
          <Container onMouseLeave={disableMobileMenu}>
            <MobileWrapper>
              <MobileNavigate to="/">Início</MobileNavigate>
              <MobileNavigate to="/">Séries</MobileNavigate>
              <MobileNavigate to="/">Filmes</MobileNavigate>
              <MobileNavigate to="/">Bombando</MobileNavigate>
              <MobileNavigate to="/">Minha Lista</MobileNavigate>
            </MobileWrapper>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default MobileMenu;
