import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SearchBar />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}

export default App;
