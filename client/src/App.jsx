import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import EventDetails from './pages/EventDetails';
import SubmitEvent from './pages/SubmitEvent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // ReactGA.initialize('UA-178250253-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/resources" element={<Resources />} />
              <Route exact path="/event-details" element={<EventDetails />} />
              <Route exact path="/submit-event" element={<SubmitEvent />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
