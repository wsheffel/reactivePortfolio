import React, { Fragment } from "react";
import CL from "../dox/Cover-Letter.pdf";
import CV from "../dox/Dzenis-H.pdf";

const Home = () => {
  return (
    <Fragment>
      <main id="home">
        <h1 className="lg-heading">
          Dzenis
          <i className="text-secondary"> H.</i>
        </h1>
        <h2 className="">
          <i>
            Competent <span className="text-secondary">Full Stack</span> Web
            Developer
          </i>
        </h2>
        <div className="icons">
          <a
            href="https://github.com/BiggaHD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>
          <a
            href="https://stackoverflow.com/users/8146571/bigga-hd"
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
          <a href={CV} download="Dzenis-H" style={{ marginLeft: "1rem" }}>
            <i className="fas fa-cloud-download-alt fa-2x" />
            <span className="dox">Download Resume</span>
          </a>
          <a href={CL} download="Cover-Letter" style={{ marginLeft: "1rem" }}>
            <i className="fas fa-file-signature fa-2x" />
            <span className="dox">Cover Letter</span>
          </a>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
