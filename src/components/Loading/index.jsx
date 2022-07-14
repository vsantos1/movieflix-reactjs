import React from "react";

import { Loader, LoaderBackground } from "./styles";

const Loading = () => {
  return (
    <LoaderBackground>
      <Loader src="/loader.gif" alt="Loader gif" />
    </LoaderBackground>
  );
};

export default Loading;
