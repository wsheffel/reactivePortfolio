import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <main id="home">
        <h1 className="lg-heading hobby">
          Dzenis
          <span className="text-secondary" style={{ marginLeft: ".5rem" }}>
            H.
          </span>
        </h1>
        <h2 className="hobby">
          <i>
            Competent <span className="text-secondary">Full Stack</span> Web
            Developer
          </i>
        </h2>
        <div className="icons hobby">
          <a
            href="https://github.com/BiggaHD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>
          <a
            href="https://stackoverflow.com/cv/bigga_hd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-stack-overflow fa-2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/dzenis-h/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in fa-2x" />
          </a>
          <a href="./dox/Dzenis-H.pdf" download style={{ marginLeft: "1rem" }}>
            <i className="fas fa-cloud-download-alt fa-2x" />
            <span className="dox">Download Resume</span>
          </a>
          <a
            href="./dox/Cover-Letter.pdf"
            download
            style={{ marginLeft: "1rem" }}
          >
            <i className="fas fa-file-signature fa-2x" />
            <span className="dox">Cover Letter</span>
          </a>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
