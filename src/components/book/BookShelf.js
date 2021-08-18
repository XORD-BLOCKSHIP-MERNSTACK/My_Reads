import React from 'react';

// Components
import Book from './Book';

const BookShelf = (props) => {
  const { shelf, books, move } = props;

  const filteredShelf = books.filter((book) => book.shelf === shelf.key);

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {filteredShelf.map((book) => (
            <Book key={book.id} book={book} shelf={shelf.key} move={move} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
