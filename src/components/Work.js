import React, { Component } from "react";
import ModalVideo from "react-modal-video";
// import ModalImage from "react-modal-image";
import ImageComponent from "./ImageComponent";

import p1 from "../img/projects/p1.JPG";
import p2 from "../img/projects/p2.png";
import p3 from "../img/projects/p3.png";
import p4 from "../img/projects/p4.png";
import p5 from "../img/projects/p5.png";
import p6 from "../img/projects/p6.png";
import p7 from "../img/projects/p7.jpg";
import p8 from "../img/projects/p8.jpg";
import p9 from "../img/projects/p9.jpg";
import p10 from "../img/projects/p10.JPG";
import p11 from "../img/projects/p11.jpg";
import p12 from "../img/projects/p12.jpg";
import p13 from "../img/projects/p13.jpg";
import p14 from "../img/projects/p14.jpg";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      videoOpen: false
    };
    this.openVideoModal = this.openVideoModal.bind(this);
  }

  openVideoModal() {
    this.setState({ videoOpen: true });
  }

  render() {
    return (
      <div>
        <main id="work">
          <h1 className="lg-heading">
            My
            <span className="text-secondary">Work</span>
          </h1>

          <ModalVideo
            channel="youtube"
            isOpen={this.state.videoOpen}
            videoId="5pUm2DWUgPM"
            onClose={() => this.setState({ videoOpen: false })}
          />

          <div className="projects">
            <div className="item">
              <ImageComponent img={p1} />
              <a
                href="https://hr-ems.herokuapp.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/Automated-Accountant"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p
                role="img"
                aria-label="hr-ems"
                style={{
                  textAlign: "center",
                  letterSpacing: "4px",
                  marginTop: "4rem"
                }}
              >
                <span className="text-secondary">
                  <b>
                    <i>Automated-Accountant</i>
                  </b>
                </span>
                <br />
                Full stack web app build using the
                <b style={{ color: "black" }}>MERN</b> stack (
                <i>amongst other things</i>) <br />
                <span role="img" aria-label="chart">
                  📊 📉 📈 📆 📑
                </span>
              </p>
            </div>

            <div className="item">
              <h3 className="text-secondary">
                This is my latest and the proudest project:
              </h3>

              <p>
                This is a EMS software - [Employee management system] that can
                help companies reduce their time spent on salaries, penalties,
                bonuses and a lot of other things regarding the accounting
                department, as well as many things regarding HR department
                [adding a new employee is only a few clicks away, and giving an
                end date is only a click away]. It contains many other features,
                like giving loans to employees, tracking their installments,
                making annual/ monthly reports, and so much more. It looks and
                feels great thanks to great structure and design, and even
                though it possesses a lot of features, the complexity is hidden
                from the end user, so it always appears easy to use, no matter
                what level of functionality you choose to use. It uses ReactJS
                on the frontend and NodeJS on the backend.
              </p>
            </div>

            <ul className="item">
              <li style={{ listStyleType: "none" }}>
                <b className="text-secondary">
                  Some of the technologies used include:
                </b>
              </li>
              <hr />
              <li>
                <b>HTML5</b> & <b>CSS3</b> (<i>On a more advance level</i>)
              </li>
              <li>
                <b>React 16</b> (<i>with Context API & React-Router 4</i>)
              </li>
              <li>
                <b>Redux</b> (<i>for 90% of my state management</i>)
              </li>
              <li>
                <b>NodeJS</b> (
                <i>
                  with <b>SailsJS</b> in this particular project
                </i>
                )
              </li>
              <li>
                <b>MongoDB</b> (<i>for monthly local storage</i>)
              </li>
              <li>
                <b>Bootstrap 4</b> (<i> but mostly pure CSS3</i>)
              </li>
              <li>
                Google OAuth2, Drive & Spreadsheets APIs (
                <i>for auth, sync, and remote storage</i>)
              </li>
              <li>
                jQuery & Lodash (<i>as helper libraries</i>)
              </li>
              <li>... and so much more</li>
              <hr />
              <li style={{ listStyleType: "none", paddingBottom: ".5rem" }}>
                <a
                  href="#!"
                  id="video"
                  className="iconsPlus icons"
                  onClick={this.openVideoModal}
                >
                  <i className="fab fa-youtube fa-2x"> </i>
                  Watch Live Preview
                </a>
              </li>

              <li style={{ listStyleType: "none" }}>
                <a
                  href="../dox/Local_Setup.docx"
                  className="iconsPlus icons"
                  download
                >
                  <i className="fas fa-download fa-2x" /> Download instructions
                </a>
              </li>
            </ul>

            <div className="hobby">
              <hr />
              <h3 className="text-secondary">
                Some of my other apps, including the very first one (right
                under)
              </h3>
              <small className="text-info">
                <b className="text-secondary">NOTE:</b>
                Some of the apps are deployed to Heroku for free, so if an app
                wasn't used for some time, they put it to sleep. So, you might
                encounter some waiting time. But that's NOT because the app is
                broken, because of bad code, errors, nor optimization. Please
                keep that in mind. Thanks!
              </small>
              <div className="item">
                <ImageComponent
                  img={p4}
                  title=""
                  style={{ marginTop: "9px" }}
                  alt="Web-To-Do"
                />

                <a
                  href="https://biggahd.github.io/Web-To-Do-App/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  <i className="fas fa-eye" /> Live preview
                </a>
                <a
                  href="https://github.com/BiggaHD/Web-To-Do-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark"
                >
                  <i className="fab fa-github" /> Github repo
                </a>
              </div>
              <p
                role="img"
                aria-label="mongo"
                style={{ textAlign: "center", letterSpacing: "4px" }}
              >
                <span className="text-secondary">
                  <span role="img" aria-label="note">
                    Web-To-Do-App 📋
                  </span>
                </span>
                <br />
                It stores your tasks into LS
              </p>
              <br />
            </div>

            <div className="item">
              <ImageComponent img={p3} title="idea-x" />
              <a
                href="https://idea-x.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/IDEA_x"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p
                role="img"
                aria-label="idea-x"
                style={{ textAlign: "center", letterSpacing: "4px" }}
              >
                <span className="text-secondary">
                  <b>idea_X</b>
                </span>
                <br />
                Ideas for your next coding project 💡
              </p>
            </div>
            <div className="item">
              <ImageComponent img={p2} title="Bigga File Uploads" />
              <a
                href="https://mongo-uploads.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/bigga_file_uploads"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p
                role="img"
                aria-label="mongo"
                style={{ textAlign: "center", letterSpacing: "4px" }}
              >
                <span className="text-secondary">
                  <b>Bigga File Uploads</b>
                </span>
                <br />
                Simple 2 Way Data Transfer 🌀
              </p>
            </div>

            <div className="item">
              <ImageComponent img={p5} title="miniStories" />
              <a
                href="https://mini-stories.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/miniStories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p
                role="img"
                aria-label="movie"
                style={{ textAlign: "center", letterSpacing: "4px" }}
              >
                <span className="text-secondary">
                  <b>miniStories</b>
                </span>
                <br />A mini social network site with many extras 📗
              </p>
            </div>

            <div className="item">
              <ImageComponent img={p6} title="reactive_movies" />
              <a
                href="https://rubicon-movies.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/reactive_movies_db"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p
                role="img"
                aria-label="movie"
                style={{ textAlign: "center", letterSpacing: "4px" }}
              >
                <span className="text-secondary">
                  <b>Ractive Movie DB</b>
                </span>
                <br />
                Web app that uses TMDb API 🎬
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p7}
                title="It's a full stack app that uses a enormous tech stack -> My versoion of SO :)"
              />
              <a
                href="https://dev-nexup.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/Dev-NexUp"
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
                className=""
              >
                <span className="text-secondary">
                  <b>Dev_nexUp</b>
                </span>
                <br />
                It's a social network for developers 💻
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p8}
                title="Build using React 16 + Redux --> It uses 'Open Weather + Google Maps API to display search results of temperatures for your favourite cities using visual graphs ..."
              />
              <a
                href="https://reactive-clima.herokuapp.com/"
                target="_blank"
                className="btn-light"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/reactive-clima"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p
                role="img"
                aria-label="clima"
                style={{ textAlign: "center", letterSpacing: "4px" }}
              >
                <span className="text-secondary">
                  <b>Reactive Clima</b>
                </span>
                <br />
                Five-day forecast of your favorite cities ⛅
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p9}
                title="This was the time when I switched from Angular to React"
              />
              <a
                href="https://reactive-tube.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/Reactive-tube"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p
                role="img"
                aria-label="video"
                style={{ textAlign: "center", letterSpacing: "4px" }}
              >
                <span className="text-secondary">
                  <b>Reactive Tube</b>
                </span>
                <br />
                React-Redux app that uses YouTube API 🎦
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p10}
                title="My sesocnd Angular app that tracks your recipes and shopping list as well"
              />
              <a
                href="https://ng-recipes.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/Balkan_Recipe_Book"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p style={{ textAlign: "center", letterSpacing: "4px" }}>
                <span className="text-secondary">
                  <b>Balkan Recipe Book</b>
                </span>
                <br />
                Collect recipes and organize shopping list 🥗
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p11}
                title="When I first started using Angular 2+"
              />
              <a
                href="https://sport-store.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/Balkan-Sports-Store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p style={{ textAlign: "center", letterSpacing: "4px" }}>
                <span className="text-secondary">
                  <b>Balkan Sports Store</b>
                </span>
                <br />
                This was my first take on Angular 🏀
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p12}
                title="It's Calorie tracker that saves your data into LS. It's made with pure vanilla JavaScript using the 'Module Pattern', ES6 features, Materialize CSS and Font Awesome for styling."
              />
              <a
                href="https://bigga-calorie-tracker.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/Calorie_Tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p style={{ textAlign: "center", letterSpacing: "4px" }}>
                <span className="text-secondary">
                  <b>Calorie Tracker</b>
                </span>
                <br />
                Track your calories and save data into LS 🍏
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p13}
                title="Loan Calculator that will determine your estimated payments for loan amounts, interest rates and terms."
              />
              <a
                href="https://loan-calculator-2.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/Loan-Calculator-2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p style={{ textAlign: "center", letterSpacing: "4px" }}>
                <span className="text-secondary">
                  <b>Balkan Recipe Book</b>
                </span>
                <br />
                Estimated payments for loan amounts, interest rates and terms.
                📊
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p14}
                title="A cool little app that lets you search local JSON files or remote API response data."
              />
              <a
                href="https://data-search.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/dataSearch"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p style={{ textAlign: "center", letterSpacing: "4px" }}>
                <span className="text-secondary">
                  <b>dataSearch</b>
                </span>
                <br />
                Search users info by first name, surname or company 🔎
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Work;
