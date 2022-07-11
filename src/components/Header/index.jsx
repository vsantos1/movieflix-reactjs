import React from "react";
import { Container, NavigationBar, Logo, Navigate, LinkList, Settings, SearchIcon, UserAvatar, Navigation, SettingsIcon, UserSettings } from "./styles";
import Notifications from "../Buttons/Notifications";
import MobileMenu from "../Mobile";

export const Header = () => {
  return (
    <Container>
      <NavigationBar>
        <Logo src="/netflix.svg" />

        <MobileMenu />

        <Navigation>
          <LinkList>
            <Navigate className="active" to="/">
              Início
            </Navigate>

            <Navigate to="/movie/2"> Séries</Navigate>

            <Navigate to="/"> Filmes</Navigate>

            <Navigate to="/"> Bombando</Navigate>

            <Navigate to="/"> Minha lista</Navigate>
          </LinkList>

          <Settings>
            <SearchIcon />
            <Notifications />
            <UserSettings>
              <UserAvatar src="https://occ-0-1896-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSpZNurO43SdpXK7qIpM5kVvcvH1XEvYohsRgHgcwCnAhll0BD9iKmDPphsDBaEBpG-BEVMIxbVxYvZ3dxH4CbsxGWGVzwA.png?r=9b2" />
              <SettingsIcon />
            </UserSettings>
          </Settings>
        </Navigation>
      </NavigationBar>
    </Container>
  );
};
