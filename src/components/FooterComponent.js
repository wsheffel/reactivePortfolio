import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <article id="wrap" className="text-center">
          <p className="display-6 text-center text-info mt-5">
            Dzenis H.{""}
            <span role="img" aria-label="dash" className="text-center">
              {""}➖
            </span>
            Portfolio{""}
            <span role="img" aria-label="dash" className="text-center">
              {""}➖
            </span>
            Copyright © 2019
          </p>
          <article id="lightings">
            <section id="one">
              <section id="two">
                <section id="three">
                  <section id="four">
                    <section id="five" />
                  </section>
                </section>
              </section>
            </section>
          </article>
        </article>
      </footer>
    </Fragment>
  );
};

export default Footer;
