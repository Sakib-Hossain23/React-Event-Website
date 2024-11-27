import React from 'react';

const Schedule = () => {
  return (
    <>
    <br /><br /><br />
    <section id="schedule-section" className="schedule-section section">
      <div className="container">
        <h3 className="section-heading text-center mb-5">Schedule</h3>

        {/* New Nav Tabs Structure */}
        <ul className="schedule-nav nav nav-pills nav-fill" id="myTab" role="tablist">
          <li className="nav-item me-2">
            <a
              className="nav-link schedule-tab active"
              id="tab-1"
              data-bs-toggle="tab"
              href="#tab-1-content"
              role="tab"
              aria-controls="tab-1-content"
              aria-selected="true"
            >
              <span className="heading">Day 1</span>
              <span className="meta">(Jan 1, 2026)</span>
            </a>
          </li>
          <li className="nav-item me-2">
            <a
              className="nav-link schedule-tab"
              id="tab-2"
              data-bs-toggle="tab"
              href="#tab-2-content"
              role="tab"
              aria-controls="tab-2-content"
              aria-selected="false"
            >
              <span className="heading">Day 2</span>
              <span className="meta">(Jan 2, 2026)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link schedule-tab"
              id="tab-3"
              data-bs-toggle="tab"
              href="#tab-3-content"
              role="tab"
              aria-controls="tab-3-content"
              aria-selected="false"
            >
              <span className="heading">Day 3</span>
              <span className="meta">(Jan 3, 2026)</span>
            </a>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content mt-4">
          {/* Day 1 Content */}
          <div className="tab-pane fade show active" id="tab-1-content" role="tabpanel" aria-labelledby="tab-1">
            <div className="schedule-item">
              <div className="time">9:00 - 9:30 am</div>
              <div className="speaker-profile">
                <img src="/images/speakers/pic 1.jpg" alt="Jack Smith" className="profile-image" />
                <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">
                  Jack Smith
                </a>
              </div>
              <h3>Talking about App Development</h3>
              <p className="location">Conference Room A</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="schedule-item">
              <div className="time">10:00 - 11:00 am</div>
              <div className="speaker-profile">
                <img src="/images/speakers/pic 2.jpg" alt="Jim Wilson" className="profile-image" />
                <a href="#modal-speaker-2" data-bs-toggle="modal" data-bs-target="#modal-speaker-2">
                  Jim Wilson
                </a>
              </div>
              <h3>Talking about Web Development</h3>
              <p className="location">Conference Room A</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="schedule-item">
              <div className="time">12:00 - 01:00 pm</div>
              <div className="speaker-profile">
                <img src="/images/speakers/pic 3.jpg" alt="Jared Taylor" className="profile-image" />
                <a href="#modal-speaker-3" data-bs-toggle="modal" data-bs-target="#modal-speaker-3">
                  Jared Taylor
                </a>
              </div>
              <h3>Talking about Web Development</h3>
              <p className="location">Conference Room A</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>

          {/* Day 2 Content */}
          <div className="tab-pane fade" id="tab-2-content" role="tabpanel" aria-labelledby="tab-2">
            <div className="schedule-item">
              <div className="time">10:00 - 11:00 am</div>
              <div className="speaker-profile">
                <img src="/images/speakers/pic 4.jpg" alt="James Wilson" className="profile-image" />
                <a href="#modal-speaker-4" data-bs-toggle="modal" data-bs-target="#modal-speaker-4">
                  James Smith
                </a>
              </div>
              <h3>Talking about App Development</h3>
              <p className="location">Conference Room A</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="schedule-item">
              <div className="time">12:00 - 01:00 pm</div>
              <div className="speaker-profile">
                <img src="/images/speakers/pic 5.jpg" alt="Jason Harris" className="profile-image" />
                <a href="#modal-speaker-5" data-bs-toggle="modal" data-bs-target="#modal-speaker-5">
                  Jason Harris
                </a>
              </div>
              <h3>Talking about App Development</h3>
              <p className="location">Conference Room A</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>

          {/* Day 3 Content */}
          <div className="tab-pane fade" id="tab-3-content" role="tabpanel" aria-labelledby="tab-3">
            <div className="schedule-item">
              <div className="time">10:00 - 11:00 am</div>
              <div className="speaker-profile">
                <img src="/images/speakers/pic 3.jpg" alt="Jared Taylor" className="profile-image" />
                <a href="#modal-speaker-3" data-bs-toggle="modal" data-bs-target="#modal-speaker-3">
                  Jared Taylor
                </a>
              </div>
              <h3>Talking about Web Development</h3>
              <p className="location">Conference Room A</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="schedule-item">
              <div className="time">12:00 - 01:00 pm</div>
              <div className="speaker-profile">
                <img src="/images/speakers/pic 1.jpg" alt="Jack Smith" className="profile-image" />
                <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">
                  Jack Smith
                </a>
              </div>
              <h3>Talking about App Development</h3>
              <p className="location">Conference Room A</p>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Schedule;
