import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaPlay, AiOutlineInfoCircle } from "../../styles/Icons";

export const BackgroundImg = styled.div`
  width: 100%;
  height: 600px;
  background-position: center;
  flex-shrink: 0;
  background-image: url("https://occ-0-1896-3852.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa9ZvcVqWBPdWr6fb_ZfH4kVU753Qzbjojz-rsLsmWPHnmghSb2yfsyLt2t_ETHRWepKZVu4q1_X0zXNpu0-5qKJqfk3pU9txB0F.webp?r=1e5");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 580px) {
    height: 400px;
    background-size: cover;
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
  margin-left: 1rem;
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
`;

const ButtonsStlye = css`
  z-index: 0;
  padding: 5px 6px;
  margin-top: 3rem;
  border-radius: 2px;
  border: 1px solid var(--black-shadows);
  font-size: 600;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LinkButton = styled(Link)`
  ${ButtonsStlye};
  color: black;
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
  z-index: 0;
  width: 70%;
  flex-shrink: 0;
  object-fit: cover;
  margin-left: 10%;
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
