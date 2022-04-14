import React from 'react';
import './Home.css';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import UpcomingEvents from '../components/UpcomingEvents';

function Home() {
  return (
    <div className="Home">
      <Header />
      <SearchBar />
      <UpcomingEvents />
    </div>
  );
}

export default Home;
