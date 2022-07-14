import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  max-height: min-content;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid var(--cultured);
  border-top: 8px solid white;
  border-bottom: 8px solid white;
  border-right: 4px solid white;
  overflow: hidden;
  background-image: url("/wave.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  border-radius: 4px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.048), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.069), 12.5px 12.5px 10px rgba(0, 0, 0, 0.085), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.101),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.122), 100px 100px 80px rgba(0, 0, 0, 0.17);
`;
export const MovieTitle = styled.h1`
  color: var(--cultured);

  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const MovieImage = styled.img`
  height: 300px;
  max-height: 350px;
  border-radius: 4px;
  background-position: center;
  margin: 4px 0rem;
  width: 100%;
  flex-shrink: 0;
  &:hover {
    object-fit: fill;
    border-bottom: 2px solid white;
    transition: 0.2s ease-in-out;
    cursor: zoom-in;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
  aspect-ratio: 1/1;
`;
export const MovieOverview = styled.p`
  font-size: 20px;
  padding: 1rem;
  font-weight: 500;
  color: var(--cultured);
  user-select: none;
`;
export const Details = styled(Link)`
  margin-left: 2rem;
  padding: 6px 12px;
  color: var(--darker);

  border: 2px solid var(--cultured);
  font-size: 24px;
  font-weight: 700;
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: var(--cultured);

  gap: 4px;

  &:hover {
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: transparent;
    color: var(--cultured);
    background-image: radial-gradient(circle 610px at 5.2% 51.6%, rgba(5, 8, 114, 1) 0%, rgba(7, 3, 53, 1) 97.5%);
    border: 2px solid var(--darker);
  }
`;
export const Votes = styled.span`
  color: var(--cultured);

  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-left: 1rem;
  > svg {
    margin-right: 4px;
  }
`;
