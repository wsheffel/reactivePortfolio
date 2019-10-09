import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import ImageComponent from "../helper/ImageComponent";

import WrokTemplate from "./WrokTemplate";

import HighlightedApp from "./Highlighted/HighlightedApp";
import HighlightedHeader from "./Highlighted/HighlightedHeader";
import HighlightedDescription from "./Highlighted/HighlightedDescription";
import HighlightedList from "./Highlighted/HighlightedList";

import p1 from "../../img/projects/p1.JPG";
import p2 from "../../img/projects/p2.png";
import p3 from "../../img/projects/p3.png";
import p5 from "../../img/projects/p5.png";
import p6 from "../../img/projects/p6.png";
import p7 from "../../img/projects/p7.jpg";
import p8 from "../../img/projects/p8.jpg";
import p9 from "../../img/projects/p9.jpg";
import p10 from "../../img/projects/p10.JPG";
import p11 from "../../img/projects/p11.jpg";
import p12 from "../../img/projects/p12.jpg";
import p13 from "../../img/projects/p13.jpg";
import p14 from "../../img/projects/p14.png";
import p15 from "../../img/projects/p15.png";
import p16 from "../../img/projects/p16.png";
import p17 from "../../img/projects/p17.png";
import p18 from "../../img/projects/p18.jpg";

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
          <h1 className="lg-heading textShadow">
            My
            <i className="text-secondary textShadow"> Work</i>
          </h1>

          <ModalVideo
            channel="youtube"
            isOpen={this.state.videoOpen}
            videoId="5pUm2DWUgPM"
            onClose={() => this.setState({ videoOpen: false })}
          />

          <HighlightedHeader />

          <div className="highlightedProject">
            <div className="item">
              <ImageComponent img={p1} title="Mars EMS" />
              <HighlightedApp
                mainLink="https://hr-ems.herokuapp.com/index.html"
                github="https://github.com/BiggaHD/Mars-EMS"
              />
            </div>
            <HighlightedDescription />
            <HighlightedList openVideo={this.openVideoModal} />
          </div>

          <div className="text-secondary otherApps">
            <hr />
            <h3 className="specialFont bold textShadow">
              I develop software every day. Below is a list of some of my other
              passion projects:{" "}
            </h3>
            <hr />
          </div>

          <div className="projects">
            {/*  */}
            <div className="item">
              <ImageComponent
                img={p7}
                title="It's a full stack app that uses a enormous tech stack -> My little versoion of SO :)"
                openImage={this.handleImageModal}
                isOpen={this.state.imageOpen}
              />
              <WrokTemplate
                mainLink="https://dev--spot.herokuapp.com/"
                github="https://github.com/BiggaHD/devSpot"
                name="Dev_Spot"
                description="It's a social network for developers 💻"
              />
            </div>

            <div className="item">
              <ImageComponent img={p6} title="reactive_movies" />
              <WrokTemplate
                mainLink="https://reactive-movies.firebaseapp.com/"
                github="https://github.com/BiggaHD/reactive_movies_db"
                name="Reactive Movie DB"
                description="A fast and beautiful web app that uses the TMDb API 🎬"
              />
            </div>

            <div className="item">
              <ImageComponent img={p15} title="Reactive RSS" />
              <WrokTemplate
                mainLink="https://reactive-rss-d3f9c.web.app"
                github="https://github.com/BiggaHD/Reactive-RSS"
                name="Reactive RSS"
                description="Great way to add, save, edit, delete, follow your RSS feeds 📰"
              />
            </div>

            <div className="item">
              <ImageComponent img={p5} title="miniStories" />
              <WrokTemplate
                mainLink="http://mini--stories.herokuapp.com/"
                github="https://github.com/BiggaHD/miniStories"
                name="miniStories"
                description="A mini social network site with many extras 📗"
              />
            </div>

            <div className="item">
              <ImageComponent img={p3} title="idea_x" />
              <WrokTemplate
                mainLink="http://idea--x.herokuapp.com/"
                github="https://github.com/BiggaHD/IDEA_x"
                name="idea_X"
                description="Save ideas for your next coding project 💡"
              />
            </div>

            <div className="item">
              <ImageComponent img={p17} title="client-panel" />
              <WrokTemplate
                mainLink="https://client-panel-2019.firebaseapp.com/"
                github="https://github.com/BiggaHD/client-panel"
                name="Client Panel"
                description=" Add clients, check/ change their balances, etc. 💶"
              />
            </div>

            <div className="item">
              <ImageComponent img={p16} title="iZEN" />
              <WrokTemplate
                mainLink="https://izen-250312.firebaseapp.com/"
                github="https://github.com/BiggaHD/iZEN"
                name="iZEN"
                description="Nice relaxing sounds & visuals to help you relax 🧘‍"
              />
            </div>

            <div className="item">
              <ImageComponent
                img={p8}
                title="Build using React 16 + Redux --> It uses 'Open Weather API to display search results of temperatures of your favourite cities using visual graphs"
              />
              <WrokTemplate
                mainLink="https://reactive-clima.web.app/"
                github="https://github.com/BiggaHD/reactive-clima"
                name="Reactive Clima"
                description="Five-day forecast of your favorite cities ⛅"
              />
            </div>

            <div className="item">
              <ImageComponent
                img={p9}
                title="This was the time when I switched from Angular to React"
              />
              <WrokTemplate
                mainLink="https://reactive-tube.web.app/"
                github="https://github.com/BiggaHD/Reactive-tube"
                name="Reactive Tube"
                description="React-Redux app that uses YouTube API 🎦"
              />
            </div>

            <div className="item">
              <ImageComponent
                img={p10}
                title="My sesocnd Angular app that tracks your recipes and shopping list as well"
              />
              <WrokTemplate
                mainLink="https://ng-recipes-f4e6c.firebaseapp.com/"
                github="https://github.com/BiggaHD/Balkan_Recipe_Book"
                name="Balkan Recipe Book"
                description="Collect recipes and organize shopping list 🥗"
              />
            </div>

            <div className="item">
              <ImageComponent
                img={p14}
                title="Create a profile, build the burger you like, order it, enjoy"
              />
              <WrokTemplate
                mainLink="https://reactive-hamburger.web.app/"
                github="https://github.com/BiggaHD/Reactive-Burger"
                name="Reactive Burger"
                description="Create a profile, build the burger you like, order it, enjoy 🍔"
              />
            </div>

            <div className="item">
              <ImageComponent img={p18} title="Example Website" />
              <WrokTemplate
                mainLink="https://evolwe-example-site.firebaseapp.com/"
                github="https://github.com/BiggaHD/evolWE"
                name="evolWe 1.0"
                description="An example of my client's page. I made a bunch of them 📱 🖥"
              />
            </div>

            <div className="item">
              <ImageComponent
                img={p11}
                title="When I first started using Angular 2+"
              />
              <WrokTemplate
                mainLink="https://ng-sports-store.web.app"
                github="https://github.com/BiggaHD/Balkan-Sports-Store"
                name="Balkan Sports Store"
                description="This was my first take on Angular 🏀"
              />
            </div>

            <div className="item">
              <ImageComponent
                img={p12}
                title="It's Calorie tracker that saves your data into LS. It's made with pure vanilla JavaScript using the 'Module Pattern', ES6 features, Materialize CSS and Font Awesome for styling."
              />
              <WrokTemplate
                mainLink="https://web-calorie-tracker.firebaseapp.com/"
                github="https://github.com/BiggaHD/Calorie_Tracker"
                name="Calorie Tracker"
                description="Track your calories and save data into LS 🍏"
              />
            </div>

            <div className="item">
              <ImageComponent
                img={p13}
                title="Loan Calculator that will determine your estimated payments for loan amounts, interest rates and terms."
              />
              <WrokTemplate
                mainLink="https://web-loan-calculator.firebaseapp.com/"
                github="https://github.com/BiggaHD/Loan-Calculator-2.0"
                name="Loan Calculator 2.0"
                description="Estimated payments for loan amounts, interest rates and terms 📊"
              />
            </div>

            <div className="item">
              <ImageComponent img={p2} title="Bigga File Uploads" />
              <WrokTemplate
                mainLink="https://bigga-share.herokuapp.com/"
                github="https://github.com/BiggaHD/bigga_file_uploads"
                name="Bigga File Uploads"
                description="2 way data transfer of various file types w/ preview 🌀"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Work;
