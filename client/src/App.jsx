import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  // ReactGA.initialize('UA-178250253-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            {/* <Nav /> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
