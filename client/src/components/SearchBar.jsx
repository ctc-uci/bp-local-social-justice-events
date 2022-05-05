import React from 'react';
import './SearchBar.css';
import searchIcon from '../assets/search-icon.svg';

function SearchBar() {
  return (
    <div className="search">
      <form action="/search" method="get" className="search-bar">
        <p className="visually-hidden">Search movies</p>
        <input type="text" id="search" placeholder="Search" name="s" />
        <button type="submit" className="search-button">
          <img src={searchIcon} alt="Search icon" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
