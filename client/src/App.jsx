import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
