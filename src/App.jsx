import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Videos from './components/Videos';
import Countdown from './components/Countdown';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Tickets from './components/Tickets';
import Venue from './components/Venue';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Modal from './components/Modal';



function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Include ScrollToTop to handle scrolling */}
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
      <Footer />
      <Modal />
    </Router>
  );
}

export default App;
