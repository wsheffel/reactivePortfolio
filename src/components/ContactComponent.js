import React from "react";

const Contact = () => {
  return (
    <main id="contact">
      <h1 className="lg-heading textShadow">
        Contact
        <i className="text-secondary textShadow"> Me</i>
      </h1>
      <h2 className="sm-heading">
        This is how you can reach me:
        <br />
        <small className="text-secondary ">
          For convenience, the contact info is clickable
        </small>
      </h2>

      <div className="boxes">
        <div className="xsm text-secondary">
          <i className="fas fa-at dark" />
          <a href="mailto:dzenis.hankusic@gmail.com">
            Email:{" "}
            <span className="text-secondary">dzenis.hankusic@gmail.com</span>
          </a>
        </div>

        <div className="xsm text-secondary">
          <i className="fas fa-mobile-alt dark" />
          <a href="tel:00387603311015">
            Phone:{" "}
            <span id="phone" className="text-secondary">
              {" "}
              (+387) 60-33-11-015
            </span>
          </a>
        </div>

        <div className="xsm text-secondary">
          <i className="fab fa-skype dark" />
          <a href="skype:dzenis.hankusic?call">
            Call me via Skype:
            <span className="text-secondary"> dzenis.hankusic</span>
          </a>
        </div>

        <div className="xsm text-secondary">
          <i className="fab fa-linkedin-in dark" />
          <a
            href="https://www.linkedin.com/in/dzenis-h/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-secondary">Find me on LinkedIn</span>
          </a>
        </div>

        <div className="xsm text-secondary">
          <i className="fas fa-map-marker-alt dark" />
          <a
            href="https://maps.google.com/?q=44.696107, 18.299074"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-secondary">Lookup my address</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
