import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-5 theme-bg-primary">
      <div className="container text-center">
        <ul className="social-list list-inline mb-4">
          <li className="list-inline-item me-3">
            <a href="#">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a href="#">
              <i className="fa-brands fa-facebook fa-fw"></i>
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a href="#">
              <i className="fa-brands fa-instagram fa-fw"></i>
            </a>
          </li>
          <li className="list-inline-item me-0">
            <a href="#">
              <i className="fa-brands fa-github fa-fw"></i>
            </a>
          </li>
        </ul>

        <ul className="footer-links list-inline mx-auto mb-4">
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item me-0">
            <a href="#">Privacy</a>
          </li>
        </ul>
        <small className="copyright">© 2024 Summit. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
