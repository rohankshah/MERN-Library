import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Authors from "./pages/Authors.js";
import CreateAuthor from "./pages/CreateAuthor.js";
import CreateBook from "./pages/CreateBook.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/createauthor" element={<CreateAuthor />} />
        <Route path="/createbook" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
