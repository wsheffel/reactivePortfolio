import React, { Fragment } from "react";

const WrokTemplate = ({ mainLink, github, name, description }) => {
  return (
    <Fragment>
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light"
      >
        <i className="fas fa-eye" /> Live preview
      </a>
      <a
        href={github}
        target="_blank"
        className="btn-dark"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" /> Github repo
      </a>
      <p
        role="img"
        aria-label="developers"
        style={{ textAlign: "center", letterSpacing: "4px" }}
      >
        <span className="text-secondary textShadow">
          <b>{name}</b>
        </span>
        <br />
        {description}
      </p>
    </Fragment>
  );
};

export default WrokTemplate;
