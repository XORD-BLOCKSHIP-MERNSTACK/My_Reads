import React from 'react';

// Importing link from react-router-dom to link home page
import { Link } from 'react-router-dom';

// Components
import SearchedList from '../components/search/SearchedList';
import SearchInput from '../components/search/SearchInput';

const Search = (props) => {
  const { search, books, move, reset, searchedBooks } = props;

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/'>
          <button className='close-search' onClick={reset}>
            Close
          </button>
        </Link>
        <SearchInput search={search} />
      </div>
      <SearchedList searchedBooks={searchedBooks} books={books} move={move} />
    </div>
  );
};

export default Search;
