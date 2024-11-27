import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleScrollToTop = () => {
    // Scroll to the top of the page without reloading
    window.scrollTo(0, 0);
  };

  return (
    <header id="header" className="header fixed-top">
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            <div>
              <Link
                style={{ textDecoration: 'none' }}
                to="/"
                className="scrollto"
                onClick={handleScrollToTop} // Scroll to top on Summit click
              >
                <h1 style={{ color: '#fff', marginTop: '14px' }}>Summit</h1>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navigation" className="navbar-collapse collapse justify-content-lg-end me-lg-3">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link 
                    className="nav-link scrollto" 
                    to="/" 
                    onClick={handleScrollToTop} // Scroll to top on Home click
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/speakers">Speakers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/schedule">Schedule</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/tickets">Tickets</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/venue">Venue</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/sponsors">Sponsors</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
