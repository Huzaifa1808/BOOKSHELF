import React from "react";
import BookCard from "./BookCard";

const MyBookshelf = ({ bookshelf }) => {
  return (
    <div>
      <h2>My Bookshelf</h2>
      <div className="book-list">
        {bookshelf.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            editionCount={book.edition_count}
            showAddButton={false} // No Add button on the Bookshelf page
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookshelf;
