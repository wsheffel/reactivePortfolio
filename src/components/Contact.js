import React from "react";

const Contact = () => {
  return (
    <main id="contact">
      <h1 className="lg-heading">
        Contact
        <span className="text-secondary">Me</span>
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
          <i className="fab fa-linkedin-in" />
          <a
            href="https://www.linkedin.com/in/dzenis-h/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="xsm text-secondary">
          <address>
            Email me <i className="fas fa-at" />
            <a href="mailto:dzenis.hankusic@gmail.com">Dzenis H.</a>
            <br />
          </address>
        </div>

        <div className="xsm text-secondary">
          <i className="fas fa-mobile-alt" />
          <a href="tel:00387603311015">Phone: (+387) 60-33-11-015</a>
          <br />
        </div>

        <div className="xsm text-secondary">
          <i className="fab fa-skype" />
          <a href="skype:dzenis.hankusic?call">Call me via Skype: </a>{" "}
          hdzenis@outlook.com
        </div>

        <div className="xsm text-secondary">
          <i className="fas fa-map-marker-alt" />
          <a
            href="https://maps.google.com/?q=44.696107, 18.299074"
            target="_blank"
            rel="noopener noreferrer"
          >
            Address: Patriotske Lige 37, Gracanica, 75320, BiH
          </a>
          <br />
        </div>
      </div>
    </main>
  );
};

export default Contact;
