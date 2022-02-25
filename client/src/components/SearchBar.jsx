import React from 'react';

const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search social justice events</span>
      <input type="text" id="header-search" placeholder="Search" name="s" />
    </label>
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
