import React from "react";
import { NotifyButton } from "./styles";
import { AiFillPlayCircle } from "../../../styles/Icons";

function Play() {
  return (
    <NotifyButton aria-label="Botão de play/pause" role="bookmark">
      <AiFillPlayCircle />
    </NotifyButton>
  );
}

export default Play;
