import React from 'react';

// Components
import BookShelfControl from './BookShelfControl';

const Book = (props) => {
  const { book, shelf, move } = props;

  return (
    <div className='book'>
      <li>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : './assets/book.jpg'
              })`,
            }}
          />
          <BookShelfControl book={book} shelf={shelf} move={move} />
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>
          {book.authors ? book.authors.join(', ') : 'Unknown Author'}
        </div>
      </li>
    </div>
  );
};

export default Book;
