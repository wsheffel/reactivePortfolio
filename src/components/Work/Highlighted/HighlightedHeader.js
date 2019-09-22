import React, { Fragment } from "react";

const HighlightedHeader = () => {
  return (
    <Fragment>
      <p
        role="img"
        aria-label="hr-ems"
        style={{
          textAlign: "center",
          letterSpacing: "4px",
          marginTop: ".1rem"
        }}
      >
        <span className="text-secondary" aria-label="dash">
          <b>
            <i>Mars EMS</i>➖
          </b>
        </span>
        Full stack web app build using the
        <b style={{ color: "black" }}> MERN</b> stack (
        <i>amongst other things</i>)
        <span role="img" aria-label="chart">
          📊 📉 📈 📆 📑
        </span>
      </p>
    </Fragment>
  );
};

export default HighlightedHeader;
