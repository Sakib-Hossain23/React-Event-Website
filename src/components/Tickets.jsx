import React from 'react';

const Tickets = () => {
  return (
    <>
    <br />
    <section id="tickets-section" className="tickets-section section theme-bg-light">
      <div className="container">
        <h3 className="section-heading text-center mb-3">Tickets</h3>
        <div className="section-intro single-col-max mx-auto text-center mb-4">
          You can buy three types of tickets
        </div>
        
        <div className="row pricing mb-5">
          {/* Regular Ticket */}
          <div className="col-12 col-md-4 p-2 p-lg-4">
            <div className="card rounded-0 border-0">
              <div className="card-body p-0">
                <div className="heading text-center p-3">
                  <h4 className="text-white mb-0">Regular</h4>
                </div>
                <div className="info p-3">
                  <div className="price-figure text-center mb-3">
                    <span className="currency">$</span><span className="number">15</span>
                  </div>
                  <div className="desc px-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          {/* Medium Priority Ticket */}
          <div className="col-12 col-md-4 p-2 p-lg-4">
            <div className="card card-special rounded-0 border-0">
              <div className="card-body p-0">
                <div className="heading text-center p-3">
                  <h4 className="text-white mb-0">Medium Priority</h4>
                </div>
                <div className="info p-3">
                  <div className="price-figure text-center">
                    <span className="currency">$</span><span className="number">20</span>
                  </div>
                  <div className="desc px-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          {/* High Priority Ticket */}
          <div className="col-12 col-md-4 p-2 p-lg-4">
            <div className="card rounded-0 border-0">
              <div className="card-body p-0">
                <div className="heading text-center p-3">
                  <h4 className="text-white mb-0">High Priority</h4>
                </div>
                <div className="info p-3">
                  <div className="price-figure text-center mb-3">
                    <span className="currency">$</span><span className="number">30</span>
                  </div>
                  <div className="desc px-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Tickets;
