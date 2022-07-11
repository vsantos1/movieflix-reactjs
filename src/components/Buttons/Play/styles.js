import styled from "styled-components";

export const NotifyButton = styled.button`
  position: relative;
  cursor: pointer;
  font-size: 2rem;
  svg,
  svg path {
    fill: var(--white);
  }
  &:hover::after {
    content: attr(aria-label);
    transition: 0.4s ease-in-out;
    margin-left: 5px;
    opacity: 1;
    z-index: 99;
  }

  ::after {
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 30%);
    line-height: 25px;
    background: var(--secondary);
    white-space: nowrap;
    border-radius: 4px;
    padding: 2px 4px;
    font-size: 13px;
    color: var(--white);
    position: absolute;
    opacity: 0;
    content: attr(aria-label);
  }
`;
