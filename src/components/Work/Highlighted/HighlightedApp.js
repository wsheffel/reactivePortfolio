import React, { Fragment } from "react";

const HighlightedApp = props => {
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
        rel="noopener noreferrer"
        className="btn-dark"
      >
        <i className="fab fa-github" /> Github repo
      </a>
    </Fragment>
  );
};

export default HighlightedApp;
