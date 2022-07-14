import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiFillCaretDown } from "../../styles/Icons";

export const Container = styled.div`
  background: transparent;

  display: flex;
  height: 68px;
  z-index: 99;
  @media (max-width: 600px) {
    height: 40px;
  }
`;

export const NavigationBar = styled.nav`
  top: 0;
  position: fixed;
  display: flex;
  width: 100vw;
  padding: 2px 4px;
`;

export const Logo = styled.img`
  width: 5rem;
  height: 3rem;

  @media (max-width: 600px) {
    height: 2rem;
  }
  margin-left: 0.5rem;
`;

const breatheAnimation = keyframes`
  from{
    width: 0%;
    opacity: 0.2;
    
  }
  to{
    width:180px;
    opacity: 1;
  }
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  > input {
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
  }
`;

export const SearchBar = styled.input`
  padding: 4px 4px;
  margin: 0 2px;
  border: 1px solid var(--white);
  white-space: nowrap;
  font-size: 13px;
  font-weight: 500;

  border-radius: 2px;
  ::placeholder {
    color: var(--cultured);
  }
`;

export const Navigate = styled(Link)`
  color: var(--white);
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  padding: 2px 4px;

  &:hover {
    color: var(--light-gray);
    transition: 0.3s ease-in-out;
  }

  &.active {
    font-weight: bold;
  }
`;

export const LinkList = styled.li`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  @media (max-width: 580px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 580px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const IconsStyle = css`
  cursor: pointer;
  &,
  svg,
  svg path {
    color: var(--white);
  }
`;

export const UserAvatar = styled.img`
  width: 2rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  margin: 0 0.5rem;
`;

export const UserSettings = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  ${IconsStyle};
  width: 24px;
  height: 24px;
`;

export const SettingsIcon = styled(AiFillCaretDown)`
  width: 12px;
  height: 10px;
  ${IconsStyle};
  margin-right: 1rem;
`;
