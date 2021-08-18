import React, { useState } from 'react';

const BookShelfControl = (props) => {
  const { book, move, shelf } = props;
  const [selectedshelf, setSelectedShelf] = useState(shelf);

  const handleMove = (e) => {
    const Value = e.target.value;
    setSelectedShelf(Value);
    move(book, Value);
  };

  return (
    <div className='book-shelf-changer'>
      <select value={selectedshelf} onChange={handleMove}>
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default BookShelfControl;
