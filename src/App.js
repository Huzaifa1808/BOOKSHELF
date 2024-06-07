import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import BookCard from "./BookCard";
import MyBookshelf from "./MyBookshelf";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setBooks([]);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToBookshelf = (book) => {
    setBookshelf((prevBookshelf) => [...prevBookshelf, book]);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>Books</h1>
          <Link to="/bookshelf" className="bookshelf-link">
            My Bookshelf
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="book-list">
                    {books.map((book) => (
                      <BookCard
                        key={book.key}
                        title={book.title}
                        editionCount={book.edition_count}
                        onAddToBookshelf={() => addToBookshelf(book)}
                        showAddButton={true}
                      />
                    ))}
                  </div>
                )}
              </>
            }
          />
          <Route
            path="/bookshelf"
            element={<MyBookshelf bookshelf={bookshelf} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
