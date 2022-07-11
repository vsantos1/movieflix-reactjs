import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Search from "./pages/search";
import Movie from "./pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
