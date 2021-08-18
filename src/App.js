import React, { useState, useEffect } from 'react';

import { debounce } from 'throttle-debounce';

// Styling
import './App.css';

// Api
import * as BooksApi from './api/booksApi';

// Importing Navigation which contain our app links
import Navigation from './navigation/Navigation';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchbooks, setSearchBooks] = useState([]);

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

  // Search books function
  const searchBooks = debounce(200, false, (query) => {
    if (query.length > 0) {
      BooksApi.search(query).then((book) => {
        if (book.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(book);
        }
      });
    } else {
      setSearchBooks([]);
    }
  });

  const resetSearch = () => {
    setSearchBooks([]);
  };

  return (
    <Navigation
      books={books}
      move={updateShelf}
      search={searchBooks}
      searchedBooks={searchbooks}
      reset={resetSearch}
    />
  );
};

export default App;
