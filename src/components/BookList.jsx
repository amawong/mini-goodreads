import React from 'react';

const BookList = ({ books }) => {
    return (
      <div>
        <h2>Your Books</h2>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} - {book.status}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default BookList;

