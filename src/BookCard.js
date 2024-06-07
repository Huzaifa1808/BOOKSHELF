import React from "react";

const BookCard = ({ title, editionCount, onAddToBookshelf, showAddButton }) => {
  return (
    <div className="book-card">
      <p>Book Title : {title}</p>
      <p>Edition Count: {editionCount}</p>
      {showAddButton && (
        <button onClick={onAddToBookshelf}>Add to Bookshelf</button>
      )}
    </div>
  );
};

export default BookCard;
