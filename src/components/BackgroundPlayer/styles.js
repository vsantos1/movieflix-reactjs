import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaPlay, AiOutlineInfoCircle } from "../../styles/Icons";

export const BackgroundImg = styled.img`
  width: 100%;
  min-height: 600px;
  height: 200px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  object-position: center;
  border-bottom: 2px solid var(--cultured);
  @media (max-width: 580px) {
    height: 400px;
    object-fit: cover;
    min-height: 300px;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const MovieContent = styled.div`
  display: flex;
  min-width: 360px;
  min-height: 300px;
  align-items: center;
  position: absolute;
  margin-top: 2rem;

  @media (min-width: 400px) {
    min-width: 200px;
    min-height: 300px;
    margin-left: 0;
  }
`;

export const ButtonsContent = styled.div`
  margin-top: 30%;
  display: flex;
  gap: 1rem;
  width: 100%;
  position: absolute;
  align-items: center;
  color: var(--light-gray);
  font-weight: 500;
  justify-content: center;
`;

const ButtonsStlye = css`
  z-index: 0;
  padding: 5px 6px;
  margin-top: 3rem;
  border-radius: 2px;
  border: 1px solid white;
  font-size: 600;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LinkButton = styled(Link)`
  ${ButtonsStlye};
  color: black;
  padding: 6px 12px;
  border: 1px solid var(--black-shadows);
  background-color: var(--cultured);
  &:hover {
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: var(--light-gray);
  }
`;

export const InformationButton = styled(Link)`
  ${ButtonsStlye};
  background-color: rgba(65, 65, 65, 0.7);
  color: white;

  &:hover {
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: rgba(65, 65, 65, 0.4);
  }
`;

export const ImageTittle = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 30%;
  margin-left: 5%;
`;

export const PlayIcon = styled(FaPlay)`
  width: 1rem;
  height: 1rem;
  &,
  svg,
  svg path {
    fill: black;
  }
`;
export const InformationIcon = styled(AiOutlineInfoCircle)`
  width: 1.5rem;
  height: 1.5rem;
  &,
  svg,
  svg path {
    fill: var(--white);
  }
`;
