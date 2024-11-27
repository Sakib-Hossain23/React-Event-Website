import React from "react";

const speakers = [
  {
    id: "modal-speaker-1",
    name: "Jack Smith",
    title: "Software Engineer",
    company: "CEO, X Company",
    image: "/images/speakers/pic 1.jpg",
    description: "You can add Speaker bio or talk information here.",
    socials: {
      facebook: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "modal-speaker-2",
    name: "Jim Wilson",
    title: "Web Developer",
    company: "CEO, X Company",
    image: "/images/speakers/pic 2.jpg",
    description: "You can add Speaker bio or talk information here.",
    socials: {
      facebook: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "modal-speaker-3",
    name: "Jared Taylor",
    title: "Web Developer",
    company: "CEO, X Company",
    image: "/images/speakers/pic 3.jpg",
    description: "You can add Speaker bio or talk information here.",
    socials: {
      facebook: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "modal-speaker-4",
    name: "James Smith",
    title: "App Developer",
    company: "CEO, X Company",
    image: "/images/speakers/pic 4.jpg",
    description: "You can add Speaker bio or talk information here.",
    socials: {
      facebook: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "modal-speaker-5",
    name: "Jason Harris",
    title: "Software Engineer",
    company: "CEO, X Company",
    image: "/images/speakers/pic 5.jpg",
    description: "You can add Speaker bio or talk information here.",
    socials: {
      facebook: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

const Modal = () => {
  return (
    <>
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className="modal modal-speaker"
          id={speaker.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={`${speaker.id}-Label`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h4
                  id={`${speaker.id}-Label`}
                  className="modal-title sr-only"
                >
                  {speaker.name}
                </h4>
              </div>
              <div className="modal-body p-0">
                <div className="theme-bg-light p-5">
                  <div className="row">
                    <div className="col-12 col-md-auto text-center">
                      <img
                        className="profile-image mb-3 mb-md-0 me-md-4 rounded-circle mx-auto"
                        src={speaker.image}
                        alt={speaker.name}
                      />
                    </div>
                    <div className="col text-center text-md-start mx-auto">
                      <h2 className="name mb-2">{speaker.name}</h2>
                      <div className="meta">{speaker.title}</div>
                      <div className="meta mb-2">{speaker.company}</div>
                      <ul className="social-list list-inline mb-0">
                        <li className="list-inline-item">
                          <a href={speaker.socials.facebook}>
                            <i className="fa-brands fa-facebook fa-fw"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={speaker.socials.linkedin}>
                            <i className="fa-brands fa-linkedin-in fa-fw"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={speaker.socials.github}>
                            <i className="fa-brands fa-github fa-fw"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="desc p-4 p-lg-5">
                  <p>{speaker.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Modal;
