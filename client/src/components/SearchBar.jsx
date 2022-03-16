import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <form action="/" method="get">
      <label htmlFor="search" className="search">
        <span className="visually-hidden">Search social justice events</span>
        <input type="text" id="search" placeholder="Search" name="s" />
      </label>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
