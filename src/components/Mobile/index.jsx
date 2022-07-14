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
              <MobileNavigate to="/">INÍCIO</MobileNavigate>
              <MobileNavigate to="/">SÉRIES</MobileNavigate>
              <MobileNavigate to="/">FILMES</MobileNavigate>
              <MobileNavigate to="/">MINHA LISTA</MobileNavigate>
              <MobileNavigate to="/">ORIGINAIS</MobileNavigate>
            </MobileWrapper>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default MobileMenu;
