import React from 'react';
import { Link } from 'react-router-dom';

import About from '../components/About';
import Videos from '../components/Videos';
import Countdown from '../components/Countdown';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';
import Tickets from '../components/Tickets';
import Venue from '../components/Venue';
import Sponsors from '../components/Sponsors';
import Modal from '../components/Modal';

const Hero = () => {
  return (
    <div>
      <div id="hero-block" className="hero-block">
        <div id="hero-carousel" className="hero-carousel carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item-1 carousel-item active"></div>
            <div className="carousel-item-2 carousel-item"></div>
            <div className="carousel-item-3 carousel-item"></div>
          </div>
        </div>
        <div className="hero-block-mask"></div>

        <div className="container">
          <div className="hero-text-block">
            <h1 className="hero-heading mb-2">Tech Summit 2026</h1>

            <div style={{ fontSize: '22px' }} className="event-meta mb-3">
              <span className="event-date">
                <img
                  style={{ height: '24px', width: '32px', marginTop: '-7px' }}
                  src="../images/logos/c5.png"
                  alt="Event Logo"
                />
                January 1 - 3
              </span>
              <span className="event-location">
                <svg
                  style={{ marginLeft: '2px', marginTop: '-3px' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#09ae88"
                  className="bi bi-pin-map"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 0a4 4 0 0 0-4 4c0 1.58.66 3.02 1.71 4.04L8 15l4.29-6.96C9.34 7.02 10 5.58 10 4a4 4 0 0 0-4-4zM8 13l-2.28-3.47c-.42-.63-.72-1.37-.72-2.03 0-1.78 1.72-3 3-3 1.27 0 2.58.74 3.2 2.03L8 13z" />
                </svg>
                Dhaka, Bangladesh
              </span>
            </div>

            <div className="hero-cta">
              <Link
                to="/tickets"  // Change this from <a> to <Link> to use React Router
                style={{
                  color: '#ffffff',
                  fontSize: '1.25rem',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  background: '#09ae88',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease, transform 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                className="nav-link scrollto"
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #0a7a66, #0c9c81)';
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #09ae88, #09ae88)';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'scale(0.98)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
              >
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Countdown />
      <About />
      <Videos />
      <Speakers />
      <Schedule />
      <Tickets />
      <Venue />
      <Sponsors />
      <Modal />
    </div>
  );
};

export default Hero;
