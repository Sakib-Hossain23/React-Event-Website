import React from 'react';

const Venue = () => {
  return (
    <>
    <br />
    <section id="venue-section" className="venue-section section theme-bg-primary text-white">
      <div className="container">
        <h3 className="section-heading text-center mb-5 text-white">Venue</h3>
        <div className="row gx-5 py-lg-5">
          {/* Left Side: How to reach the location */}
          <div className="col-12 col-lg-7 h-100">
            <div className="desc">
              <h4 className="text-white mb-3">How to reach the location</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="row pt-3">
                {/* By Plane */}
                <div className="col-12 col-md-6 mb-4">
                  <div className="grid-item p-4">
                    <h5 className="text-white mb-3 title">
                      <i className="fas fa-plane-departure me-2"></i>By Plane
                    </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt..</p>
                    <a className="text-white" href="#">Search Tickets &rarr;</a>
                  </div>
                </div>

                {/* By Car */}
                <div className="col-12 col-md-6 mb-4">
                  <div className="grid-item p-4">
                    <h5 className="text-white mb-3 title">
                      <i className="fas fa-car me-2"></i>By Car
                    </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt..</p>
                    <a className="text-white" href="#">Check Route &rarr;</a>
                  </div>
                </div>

                {/* By Bus */}
                <div className="col-12 col-md-6 mb-4">
                  <div className="grid-item p-4">
                    <h5 className="text-white mb-3 title">
                      <i className="fas fa-bus-alt me-2"></i>By Bus
                    </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt..</p>
                    <a className="text-white" href="#">Book Tickets &rarr;</a>
                  </div>
                </div>

                {/* By Train */}
                <div className="col-12 col-md-6 mb-4">
                  <div className="grid-item p-4">
                    <h5 className="text-white mb-3 title">
                      <i className="fas fa-subway me-2"></i>By Train
                    </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt..</p>
                    <a className="text-white" href="#">Book Tickets &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Venue Images */}
          <div className="col-12 col-xl-3 col-lg-4 offset-lg-1 position-relative h-100 mt-5 mt-lg-0">
            <div className="figures-holder">
              <div className="figure figure-1">
                <img className="shadow img-styled" src="/images/venue/v1.jpg" alt="Venue 1" />
              </div>
              <div className="figure figure-2">
                <img className="shadow img-styled" src="/images/venue/v2.jpg" alt="Venue 2" />
              </div>
              <div className="figure figure-3">
                <img className="shadow img-styled" src="/images/venue/v3.jpg" alt="Venue 3" />
              </div>
              <div className="figure figure-4">
                <img className="shadow img-styled" src="/images/venue/v4.jpg" alt="Venue 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Venue;
