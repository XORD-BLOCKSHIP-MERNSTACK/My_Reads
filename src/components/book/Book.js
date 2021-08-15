import React from 'react';
import BookShelfControl from './BookShelfControl';

const Book = () => {
  return (
    <div className='col-sm-12 col-md-4 col-lg-3'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
          }}
        />
        <BookShelfControl />
      </div>
      <div className='book-title'>"Harry Porter"</div>
      <div className='book-authors'>Hello</div>
    </div>
  );
};

export default Book;
