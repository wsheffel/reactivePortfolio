import React, { Fragment } from "react";

const WrokTemplate = ({ mainLink, github, name, description }) => {
  return (
    <Fragment>
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light"
        aria-label="Link for the deployed app"
      >
        <i className="fas fa-eye" /> Live preview
      </a>
      <a
        href={github}
        target="_blank"
        className="btn-dark"
        rel="noopener noreferrer"
        aria-label="Open gitHub repo for this program"
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
