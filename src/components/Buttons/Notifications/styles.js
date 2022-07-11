import styled from "styled-components";

export const Notifications = styled.button`
  position: relative;
  border: 0;
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  &,
  svg,
  svg path {
    color: var(--white);
  }

  ::before {
    display: flex;
    top: -0.2em;
    right: -0.2em;
    width: 1em;
    height: 1em;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: var(--carnelian);
    white-space: nowrap;
    border-radius: 50%;
    padding: 2px 4px;
    font-size: 10px;
    color: #fff;
    overflow: hidden;
    position: absolute;
    content: "9+";
  }
`;
