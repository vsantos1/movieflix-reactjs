import React from "react";
import { Globals } from "./styles/Global";
import { Header } from "./components/Header";
import BackgroundPlayer from "./components/BackgroundPlayer";

function App() {
  return (
    <>
      <BackgroundPlayer />
      <Header />
      <Globals />
    </>
  );
}

export default App;
