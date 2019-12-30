import React from 'react';

import './searchbox.styles.css';

const SearchBox = ({ placeholder, handleChange, value }) => {
  return (
    <input
      className='search' 
      type='search' 
      placeholder={placeholder} 
      onChange={handleChange}
      value={value} 
    />
  )
}

export default SearchBox;