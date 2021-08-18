import React from 'react';

// Importing link from react-router-dom to link search page
import { Link } from 'react-router-dom';

// Components
import BookShelf from '../components/book/BookShelf';

// Book Shelves
const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' },
];

const Home = (props) => {
  const { books, move } = props;

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
              move={move}
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
