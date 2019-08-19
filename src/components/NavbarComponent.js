import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <article id="wrap" className="text-center">
        <Link to="/" className="display-6 text-center text-info mt-5">
          HOME
        </Link>
        <Link to="/about" className="display-6 text-center text-info mt-5">
          ABOUT
        </Link>
        <Link to="/work" className="display-6 text-center text-info mt-5">
          WORK
        </Link>
        <Link to="/contact" className="display-6 text-center text-info mt-5">
          CONTACT
        </Link>

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
    </nav>
  );
};

export default Navbar;
