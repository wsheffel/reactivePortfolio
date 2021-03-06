import React, { Fragment, useEffect } from "react";

import webp_Portrait from "../assets/img/portrait.webp";
import jpg_Portrait from "../assets/backup/portrait.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About me"; // making the document title dynamic
  }, []);

  return (
    <Fragment>
      <main id="about">
        <h1 className="lg-heading textShadow">
          About
          <i className="text-secondary textShadow"> Me</i>
        </h1>
        <h2 className="sm-heading">
          A brief insight into the compound but a pleasant person that makes me
        </h2>
        <div className="about-info">
          <picture>
            {/* If the browser supports WebP format use that*/}
            <source srcSet={webp_Portrait} type="image/webp" />
            {/* If NOT use the regular JPG foramt insted*/}
            <source srcSet={jpg_Portrait} type="image/jpeg" />
            {/* If the browser doesn't support the '<picture' tag use regular '<img> instead  */}
            <img src={jpg_Portrait} alt="Dzenis H." className="bio-image" />
          </picture>

          <div className="bio">
            <h3 className="text-secondary textShadow">Little Intro:</h3>
            <small>
              I'm highly passionate when it comes to learning all sorts of
              things. That's what keeps me going in life. These days I'm
              borderline obsessed with programming. I look at coding as a
              never-ending challenge, and I won't slow down until I feel like I
              achieved a level of <em className="diff-text">mastery</em>. Then
              the real fun begins. Until that moment, it's all about
              self-discipline, continuous learning, and tremendous patience. I,
              in one word: <q className="diff-text">DRIVEN</q>
            </small>
            <hr />
            <p className="text-secondary textShadow">
              My life philosophy goes something like this:
            </p>
            <small>
              <strong className="textShadow">
                The level of your success can be found in your daily routine.
              </strong>
              <hr style={{ marginBottom: ".2rem" }} />
              Just like <span className="diff-text">Aristotle</span> said:
              <blockquote className="sunflower">
                "We are what we repeatedly do. Excellence, then, is not an act,
                but a habit."
              </blockquote>
              And in the words of the infamous
              <em className="diff-text"> Howard Hughes:</em>
              <blockquote className="sunflower">
                "Don't tell me I can't do it; Don't tell me it can't be done."
              </blockquote>
              <p
                className="text-secondary textShadow"
                style={{ fontSize: "1.25rem" }}
              >
                However, my very own personality is a little bit different:
              </p>
              <span className="primary-color">
                <p>
                  <span className="bold textShadow">
                    We'll do it together.{" "}
                  </span>
                  If it's not working now, maybe it's time to change our energy,
                  daily routines and to start thinking outside the box. I'm all
                  about positive vibes. I like to collaborate, to receive and
                  share knowledge, and I possess a commitment to creating a
                  strong team environment dynamics. One thing that can affect me
                  negatively is when someone is claiming that a particular task
                  is undoable. Okay, I get. It gets hard sometimes, but if an
                  individual can't do it by themselves, then
                  <span className="diff-text">
                    {" "}
                    <em>WE</em>
                  </span>{" "}
                  can absolutely achieve it{" "}
                  <span className="diff-text">
                    <em>together</em>.
                  </span>{" "}
                  <br />
                  Let's stay calm, focused, driven, and by the end of the day,
                  let's make this work.
                </p>
              </span>
            </small>
            <hr />

            <div
              className="test"
              style={{ display: "grid", gridTemplateColumns: "1fr" }}
            >
              <div className="">
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "cursive",
                    letterSpacing: ".5rem"
                  }}
                >
                  <b className="text-secondary">
                    "Teamwork makes the dream work"
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div className="job job-1 textShadow">
            <h3 className="text-secondary specialFont bold">Tech stack:</h3>
            <h5>
              Technologies that I'm familiar with, practice and use daily:
            </h5>
            <ul className="firstStack">
              <li>
                <b className="text-secondary">HTML5 </b>
                <i>[w/ the newest standards & approaches]</i>
              </li>
              <li>
                <b className="text-secondary">CSS3 </b>
                <i>[Grid, Flexbox, Animations, Sass]</i>
              </li>
              <li>
                <b className="text-secondary">JavaScript </b>
                <i>
                  [proficient with vanilla <b>ES6</b> and above]
                </i>
              </li>
              <li>
                <b className="text-secondary">React 16+ </b>
                <i>[familiar with its entire ecosystem]</i>
              </li>
              <li>
                <b className="text-secondary">Redux </b>
                <i>[my essential tool for state management]</i>
              </li>
              <li>
                <b className="text-secondary">NodeJS </b>
                <i>
                  [mostly with <b>Express</b> & <b>SailsJS </b>too]
                </i>
              </li>
              <li>
                <b className="text-secondary">MongoDB </b>
                <i>
                  [natively or/ and with <b>Mongoose</b>]
                </i>
              </li>
              <li>
                <b className="text-secondary">Bootstrap 4 </b>
                <i>
                  [great with <b>Materialize CSS</b> too]
                </i>
              </li>
              <li>
                <b className="text-secondary">GraphQL </b>
                <i>[as an alternative to RESTful APIs]</i>
              </li>
            </ul>
            <hr />
            <h4 style={{ marginTop: "0.2rem" }}>
              <b className="text-secondary">Deployment:</b> I use various
              platforms depending on the type and the size of the project:
              <span className="diff-text">
                {" "}
                Heroku, Firebase, Netlify, App Engine, AWS, Google Cloud.
              </span>
            </h4>
          </div>

          <div className="job job-2 textShadow">
            <h3 className="text-secondary specialFont bold">
              Additional utilities:
            </h3>
            <h5>
              Some of additional tools and libraries that I use regularly:
            </h5>
            <ul className="secondStack">
              <li>
                <b className="text-secondary">Git </b>
                <i>[as my version control system]</i>
              </li>
              <li>
                <b className="text-secondary">Webpack </b>
                <i>[for module bundling]</i>
              </li>
              <li>
                <b className="text-secondary">Gulp </b>
                <i>[when a task runner is required]</i>
              </li>

              <li>
                <b className="text-secondary">Babel </b>
                <i>[for backward compatibility of ES6+]</i>
              </li>
              <li>
                <b className="text-secondary">Postman </b>
                <i>[as my API development testing tool]</i>
              </li>
              <li>
                <b className="text-secondary">Lodash </b>
                <i>[often required as my helper library]</i>
              </li>
              <li>
                <b className="text-secondary">Jest, Enzyme, Mocha </b>
                <i>[as my testing utilities]</i>
              </li>
              <li>
                <b className="text-secondary">EJS/ HBS </b>
                <i>[when all focus is on the backend]</i>
              </li>
            </ul>
            <hr />
            <h4 style={{ marginTop: "0.2rem" }}>
              As the skills and experience of a developer grow, so does the list
              of tools used. It comes to a point where is hard to list
              everything, but to me, the ones listed above are the most
              relevant.
            </h4>
          </div>

          <div
            className="job job-3 textShadow"
            style={{ paddingBottom: ".3rem" }}
          >
            <h3 className="text-secondary specialFont bold">
              Other interesting facts:
            </h3>
            <h4>
              <ul className="thirdStack">
                <li>
                  Technology stack that I'm currently most focused on:{" "}
                  <b className="text-secondary">MERN </b>{" "}
                  <span
                    style={{ fontSize: ".85rem" }}
                    className="diff-text"
                    aria-label="dash"
                    role="img"
                    id="mern"
                  >
                    {" "}
                    ➖ [MongoDB, ExpressJS, ReactJS, NodeJS]
                  </span>{" "}
                </li>
                <li>
                  A programming language that I'm familiar with, but haven't
                  used for a long time:
                  <b className="text-secondary"> Java.</b>
                </li>
                <li>
                  A programming language that I plan to learn and would like to
                  work with in the future:{" "}
                  <b className="text-secondary"> Python.</b>
                </li>
              </ul>
            </h4>
            <hr />
            <h4 style={{ marginTop: "0.2rem" }}>
              When I'm not coding, learning new programming skills, or advancing
              the existing ones, I'm doing one of the following:
            </h4>
            <ul>
              <li>
                <i>Practising meditation & healthy lifestyle.</i>
              </li>
              <li>
                <i>Extensively listening to audiobooks.</i>
              </li>
              <li>
                <i>Reading articles about A.I.</i>
              </li>
              <li>
                <i>Spending quality family time.</i>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default About;
