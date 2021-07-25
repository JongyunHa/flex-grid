import React from 'react';
import '../default.css';
import './searchBar.css';

const SearchBar = () => {
  return (
    <form className="search-form">
      <input type="search" />
      <input type="submit" value="찾기" />
    </form>
  );
};

export default SearchBar;
