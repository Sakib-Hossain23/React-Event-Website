import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sponsors = () => {
  return (
    <>
      <br />
      <section id="sponsors-section" className="sponsors-section section">
        <div className="container">
          <h3 className="section-heading text-center mb-3">Sponsors &amp; Partners</h3>
          <div className="section-intro text-center single-col-max mx-auto mb-5"></div>
          <div className="row logos justify-content-center">
            {Array.from({ length: 12 }, (_, index) => (
              <div className="logo-item col-6 col-md-4 col-lg-2" key={index}>
                <img
                  src={`/images/logos/l${index + 1}.png`}
                  alt={`Logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="sponsors-cta text-center pt-5">
            <Link
              to="/tickets"  // Use Link component to navigate to tickets section
              style={{
                color: "#ffffff",
                fontSize: "1.25rem",
                padding: "1rem 2rem",
                borderRadius: "8px",
                background: "#09ae88",
                border: "none",
                cursor: "pointer",
                transition: "background 0.3s ease, transform 0.3s ease",
                textDecoration: "none",
                display: "inline-block",
              }}
              className="nav-link scrollto"
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(135deg, #0a7a66, #0c9c81)";
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(135deg, #09ae88, #09ae88)";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
              onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
              onMouseUp={(e) => (e.target.style.transform = "scale(1.05)")}
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
