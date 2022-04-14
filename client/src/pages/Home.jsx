import React from 'react';
import './Home.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import UpcomingEvents from '../components/UpcomingEvents';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <SearchBar />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}

export default Home;
