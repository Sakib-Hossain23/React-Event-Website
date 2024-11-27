import React from "react";

const speakers = [
  {
    id: "modal-speaker-1",
    name: "Jack Smith",
    title: "Software Engineer",
    company: "CEO, X Company",
    image: "/images/speakers/pic 1.jpg",
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
    socials: {
      facebook: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "modal-speaker-1",
    name: "Jack Smith",
    title: "Software Engineer",
    company: "CEO, X Company",
    image: "/images/speakers/pic 1.jpg",
    socials: {
      facebook: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

const Speakers = () => {
  return (
    <>
    <br />
    <section id="speakers-section" className="speakers-section section">
      <div className="container">
        <h3 className="section-heading text-center mb-3">Speakers</h3>
        <div className="section-intro text-center single-col-max mx-auto mb-5">
          You can add here speakers details.
        </div>
        <div className="row">
          {speakers.map((speaker) => (
            <div className="col-6 col-lg-3 mb-4" key={speaker.id}>
              <div className="card rounded-0">
                <a
                  href={`#${speaker.id}`}
                  data-bs-toggle="modal"
                  data-bs-target={`#${speaker.id}`}
                >
                  <img
                    src={speaker.image}
                    className="card-img-top rounded-0"
                    alt={speaker.name}
                  />
                </a>
                <div style={{ border: "none" }} className="card-body">
                  <h5 className="card-title mb-2">{speaker.name}</h5>
                  <div className="card-text mb-3">
                    <div className="meta">{speaker.title}</div>
                    <div className="meta">{speaker.company}</div>
                  </div>
                </div>
                <div className="card-footer text-muted">
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
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Speakers;
