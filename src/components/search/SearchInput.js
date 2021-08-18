import React, { useState } from 'react';

const SearchInput = (props) => {
  const { search } = props;

  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    setValue(e.target.value);
    search(value);
  };

  return (
    <div className='search-books-input-wrapper'>
      <input
        type='text'
        // value={value}
        onChange={handleSearch}
        placeholder='Search by title or author'
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
