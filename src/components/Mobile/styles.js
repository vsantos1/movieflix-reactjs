import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp } from "../../styles/Icons";

export const Container = styled.div`
  z-index: 99;
  margin-left: 6rem;
  position: absolute;
  margin-top: 2rem;
  min-height: fit-content;
  min-width: 200px;
  border: 1px;
  border-top: 2px solid var(--white);
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  transition: 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  @media (min-width: 580px) {
    display: none;
  }
`;

export const MenuTrigger = styled.a`
  z-index: 99;

  cursor: pointer;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 13px;

  @media (min-width: 580px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  z-index: 99;

  display: flex;
  flex-direction: column;
`;

export const MobileNavigate = styled(Link)`
  z-index: 99;

  color: var(--light-gray);
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  padding: 2px 4px;
  z-index: 99;
  width: 100%;
  padding: 2px 4rem;
  &:hover {
    background-color: rgba(30, 30, 30, 0.9);
    color: var(--cultured);
    transition: 0.2s ease-in-out;
  }

  &.active {
    font-weight: bold;
  }
`;

const IconsStyle = css`
  z-index: 99;

  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 2px;
`;

export const MenuIconOpen = styled(AiFillCaretDown)`
  ${IconsStyle};
`;

export const MenuIconClose = styled(AiFillCaretUp)`
  ${IconsStyle}
`;
