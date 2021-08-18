import React, { useState, useEffect } from 'react';

// Importing link from react-router-dom to link search page
import { Link } from 'react-router-dom';

// Components
import BookShelf from '../components/book/BookShelf';

// Api
import * as BooksApi from '../api/booksApi';

// Book Shelves
const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' },
];

const Home = () => {
  const [books, setBooks] = useState([]);

  // Calling Api and fetching all books
  useEffect(() => {
    const fetchApi = async () => {
      await BooksApi.getAll()
        .then((book) => {
          setBooks(book);
        })
        .catch((err) => console.log(err));
    };
    fetchApi();
  }, []);

  // Move books on different shelf function
  const updateShelf = (book, shelf) => {
    console.log('Move to =>', book, shelf);
    BooksApi.update(book, shelf).catch((err) => {
      console.log(err);
    });
    if (shelf === 'none') {
      setBooks(books.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setBooks(books.filter((b) => b.id !== book.id).concat(book));
    }
  };

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {bookshelves.map((shelf) => (
            <BookShelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              move={updateShelf}
            />
          ))}
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
