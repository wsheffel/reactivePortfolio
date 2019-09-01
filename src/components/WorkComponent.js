import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import ImageComponent from "./ImageComponent";

import p1 from "../img/projects/p1.JPG";
import p2 from "../img/projects/p2.png";
import p3 from "../img/projects/p3.png";
// import p4 from "../img/projects/p4.png";
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
import p15 from "../img/projects/p15.png";
import p16 from "../img/projects/p16.png";
import p17 from "../img/projects/p17.png";
import p18 from "../img/projects/p18.jpg";

import Local_Setup from "../dox/Local_Setup.pdf";

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
            <i className="text-secondary"> Work</i>
          </h1>

          <ModalVideo
            channel="youtube"
            isOpen={this.state.videoOpen}
            videoId="5pUm2DWUgPM"
            onClose={() => this.setState({ videoOpen: false })}
          />

          <div>
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
          </div>

          <div className="highlightedProject">
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
                href="https://github.com/BiggaHD/Mars-EMS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
            </div>

            <div className="item description">
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

            <ul
              className="item adhd"
              style={{ listStyleType: "none", marginTop: 0, paddingTop: 0 }}
            >
              <li>
                <b className="text-secondary">
                  Some of the technologies used in this app include:
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
                  className="icons"
                  onClick={this.openVideoModal}
                >
                  <i className="fab fa-youtube fa-2x" />
                  Watch Video Preview
                </a>
              </li>

              <li style={{ listStyleType: "none" }}>
                <a href={Local_Setup} className="icons" download="Local_Setup">
                  <i className="fas fa-download fa-2x" /> Download Instructions
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="hobby">
              <hr />
              <h3 className="text-secondary">
                Some of my other apps, including the very first one (right
                under)
              </h3>
              <small className="text-info">
                <b className="text-secondary">NOTE: </b>
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
                With persistent data
              </p>
              <br />
            </div> */}

          <div className="text-secondary otherApps">
            <h2>
              I make software everyday. Here's a nice collection of some of my
              other apps:
            </h2>
            <hr />
          </div>

          <div className="projects">
            <div className="item">
              <ImageComponent img={p15} title="reactive-rss" />
              <a
                href="https://reactive-rss-d3f9c.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/Reactive-RSS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                <i className="fab fa-github" /> Github repo
              </a>
              <p
                role="img"
                aria-label="reactiveRSS"
                style={{ textAlign: "center", letterSpacing: "4px" }}
              >
                <span className="text-secondary">
                  <b>reactiveRSS</b>
                </span>
                <br />
                Great way to add, save, edit, delete, follow your RSS feeds 📰
              </p>
            </div>

            <div className="item">
              <ImageComponent img={p16} title="iZEN" />
              <a
                href="https://izen-250312.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/iZEN"
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
                  <b>iZEN</b>
                </span>
                <br />
                Nice relaxing sounds & visuals to help you relax 🧘‍
              </p>
            </div>

            <div className="item">
              <ImageComponent img={p3} title="idea-x" />
              <a
                href="https://idea-x.herokuapp.com"
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
                href="https://bigga-uploads.herokuapp.com/"
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
                href="https://mini-stories.herokuapp.com"
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
                href="https://reactive-movies.firebaseapp.com/"
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
                title="It's a full stack app that uses a enormous tech stack -> My little versoion of SO :)"
              />
              <a
                href="https://devspot.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/devSpot"
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
                  <b>Dev_Spot</b>
                </span>
                <br />
                It's a social network for developers 💻
              </p>
            </div>

            <div className="item">
              <ImageComponent img={p17} title="" />
              <a
                href="https://client-panel-2019.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/client-panel"
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
                  <b>Client Panel</b>
                </span>
                <br />
                Add clients, check/ change their balances ... 💶
              </p>
            </div>

            <div className="item">
              <ImageComponent
                img={p8}
                title="Build using React 16 + Redux --> It uses 'Open Weather API to display search results of temperatures for your favourite cities using visual graphs ..."
              />
              <a
                href="https://reactive-clima.web.app/"
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
                href="https://reactive-tube.web.app/"
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
                href="https://ng-recipes-f4e6c.firebaseapp.com/"
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
                href="https://ng-sports-store.web.app"
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
                href="https://web-calorie-tracker.firebaseapp.com/"
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
                href="https://web-loan-calculator.firebaseapp.com/"
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
                href="https://data-search-8e6fd.firebaseapp.com/"
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

            <div className="item">
              <ImageComponent img={p18} title="evolWe" />
              <a
                href="https://evolwe-example-site.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <i className="fas fa-eye" /> Live preview
              </a>
              <a
                href="https://github.com/BiggaHD/evolWE"
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
                  <b>evolWe 1.0 </b>
                </span>
                <br />
                An example of my client's page. I made a bunch of them 📱 🖥
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Work;
