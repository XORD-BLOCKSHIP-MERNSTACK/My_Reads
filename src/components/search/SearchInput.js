import React, { useState } from 'react';

const SearchInput = () => {
  const [value, setValue] = useState('');

  const handleSearch = () => {};

  return (
    <div className='search-books-input-wrapper'>
      <input
        type='text'
        value={value}
        onChange={handleSearch}
        placeholder='Search by title or author'
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
