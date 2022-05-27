import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Authors from "./pages/Authors.js";
import Book from "./pages/Books.js";
import CreateAuthor from "./pages/CreateAuthor.js";
import CreateBook from "./pages/CreateBook.js";
import AuthorDetails from "./pages/AuthorDetails.js";
import BookDetails from "./pages/BookDetails.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Authors />} />
        <Route path="/book" element={<Book />} />
        <Route path="/createauthor" element={<CreateAuthor />} />
        <Route path="/createbook" element={<CreateBook />} />
        <Route path="/author/:id" element={<AuthorDetails />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
