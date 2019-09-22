import React, { Fragment } from "react";

const WrokTemplate = props => {
  return (
    <Fragment>
      <a
        href={props.mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light"
      >
        <i className="fas fa-eye" /> Live preview
      </a>
      <a
        href={props.github}
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
        <span className="text-secondary">
          <b>{props.name}</b>
        </span>
        <br />
        {props.description}
      </p>
    </Fragment>
  );
};

export default WrokTemplate;
