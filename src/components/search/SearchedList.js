import React from 'react';

// Components
import Book from '../book/Book';

const SearchedList = (props) => {
  const { searchedBooks, books, move } = props;

  const searchedlist = searchedBooks.map((book) => {
    books.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });

  return (
    <div className='search-books-results'>
      <ol className='books-grid'>
        {searchedlist.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            move={move}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchedList;
