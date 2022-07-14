import React, { useState } from "react";
import { Container, SearchBar, SearchForm, NavigationBar, Logo, Navigate, LinkList, Settings, SearchIcon, UserAvatar, Navigation, SettingsIcon, UserSettings } from "./styles";
import Notifications from "../Buttons/Notifications";
import MobileMenu from "../Mobile";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const [searchBar, setSearchBar] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchMovie = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const toggleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  return (
    <Container>
      <NavigationBar>
        <a href="#header">
          <Logo src="/disney-logo.svg" />
        </a>

        <MobileMenu />

        <Navigation>
          <LinkList>
            <Navigate className="active" to="/">
              INÍCIO
            </Navigate>

            <Navigate to="/"> SÉRIES</Navigate>

            <Navigate to="/"> FILMES</Navigate>

            <Navigate to="/"> MINHA LISTA</Navigate>

            <Navigate to="/"> ORIGINAIS</Navigate>
          </LinkList>

          <Settings>
            <SearchForm onSubmit={handleSearchMovie}>
              {searchBar ? <SearchBar type="text" placeholder="Titulos e gêneros" onChange={(e) => setSearch(e.target.value)} value={search} /> : null}
              <SearchIcon onClick={toggleSearchBar} />
            </SearchForm>

            <Notifications />
            <UserSettings>
              <UserAvatar src="/avatar.png" />
              <SettingsIcon />
            </UserSettings>
          </Settings>
        </Navigation>
      </NavigationBar>
    </Container>
  );
};
