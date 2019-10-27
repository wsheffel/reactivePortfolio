import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";

import ModalVideo from "react-modal-video";
import ImageComponent from "../helper/ImageComponent";

import WrokTemplate from "./WrokTemplate";

import HighlightedApp from "./Highlighted/HighlightedApp";
import HighlightedHeader from "./Highlighted/HighlightedHeader";
import HighlightedDescription from "./Highlighted/HighlightedDescription";
import HighlightedList from "./Highlighted/HighlightedList";

import p1 from "../../assets/img/projects/p1.jpg";
import p2 from "../../assets/img/projects/p2.jpg";
import p3 from "../../assets/img/projects/p3.jpg";
import p5 from "../../assets/img/projects/p5.jpg";
import p6 from "../../assets/img/projects/p6.jpg";
import p7 from "../../assets/img/projects/p7.jpg";
import p8 from "../../assets/img/projects/p8.jpg";
import p9 from "../../assets/img/projects/p9.jpg";
import p10 from "../../assets/img/projects/p10.jpg";
import p11 from "../../assets/img/projects/p11.jpg";
import p12 from "../../assets/img/projects/p12.jpg";
import p13 from "../../assets/img/projects/p13.jpg";
import p14 from "../../assets/img/projects/p14.jpg";
import p15 from "../../assets/img/projects/p15.jpg";
import p16 from "../../assets/img/projects/p16.jpg";
import p17 from "../../assets/img/projects/p17.jpg";
import p18 from "../../assets/img/projects/p18.jpg";

const Work = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    document.title = "My work"; // making the document title dynamic
  }, []);

  return (
    <div>
      <main id="work">
        <h1 className="lg-heading textShadow">
          My
          <i className="text-secondary textShadow"> Work</i>
        </h1>

        <ModalVideo
          channel="youtube"
          isOpen={videoOpen}
          videoId="5pUm2DWUgPM"
          onClose={() => setVideoOpen(false)}
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
          <HighlightedList openVideo={() => setVideoOpen(true)} />
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
          <div className="item">
            <LazyLoad>
              {/* Lazy loading HOC that works as it should ... */}
              <ImageComponent
                img={p7}
                title="It's a full stack app that uses a enormous tech stack -> My little versoion of SO :)"
              />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://dev--spot.herokuapp.com/"
              github="https://github.com/BiggaHD/devSpot"
              name="Dev_Spot"
              description="It's a social network for developers 💻"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent img={p6} title="reactive_movies" />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://reactive-movies.firebaseapp.com/"
              github="https://github.com/BiggaHD/reactive_movies_db"
              name="Reactive Movie DB"
              description="A fast and beautiful web app that uses the TMDb API 🎬"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent img={p15} title="Reactive RSS" />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://reactive-rss-d3f9c.web.app"
              github="https://github.com/BiggaHD/Reactive-RSS"
              name="Reactive RSS"
              description="Great way to add, save, edit, delete, follow your RSS feeds 📰"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent img={p5} title="miniStories" />
            </LazyLoad>
            <WrokTemplate
              mainLink="http://mini--stories.herokuapp.com/"
              github="https://github.com/BiggaHD/miniStories"
              name="miniStories"
              description="A mini social network site with many extras 📗"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent img={p3} title="idea_x" />
            </LazyLoad>
            <WrokTemplate
              mainLink="http://idea--x.herokuapp.com/"
              github="https://github.com/BiggaHD/IDEA_x"
              name="idea_X"
              description="Save ideas for your next coding project 💡"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent img={p17} title="client-panel" />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://client-panel-2019.firebaseapp.com/"
              github="https://github.com/BiggaHD/client-panel"
              name="Client Panel"
              description=" Add clients, check/ change their balances, etc. 💶"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent img={p16} title="iZEN" />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://izen-250312.firebaseapp.com/"
              github="https://github.com/BiggaHD/iZEN"
              name="iZEN"
              description="Nice relaxing sounds & visuals to help you relax 🧘‍"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent
                img={p8}
                title="Build using React 16 + Redux --> It uses 'Open Weather API to display search results of temperatures of your favourite cities using visual graphs"
              />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://reactive-clima.web.app/"
              github="https://github.com/BiggaHD/reactive-clima"
              name="Reactive Clima"
              description="Five-day forecast of your favorite cities ⛅"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent
                img={p9}
                title="This was the time when I switched from Angular to React"
              />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://reactive-tube.web.app/"
              github="https://github.com/BiggaHD/Reactive-tube"
              name="Reactive Tube"
              description="React-Redux app that uses YouTube API 🎦"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent
                img={p10}
                title="My sesocnd Angular app that tracks your recipes and shopping list as well"
              />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://ng-recipes-f4e6c.firebaseapp.com/"
              github="https://github.com/BiggaHD/Balkan_Recipe_Book"
              name="Balkan Recipe Book"
              description="Collect recipes and organize shopping list 🥗"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent
                img={p14}
                title="Create a profile, build the burger you like, order it, enjoy"
              />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://reactive-hamburger.web.app/"
              github="https://github.com/BiggaHD/Reactive-Burger"
              name="Reactive Burger"
              description="Create a profile, build the burger you like, order it, enjoy 🍔"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent img={p18} title="Example Website" />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://evolwe-example-site.firebaseapp.com/"
              github="https://github.com/BiggaHD/evolWE"
              name="evolWe 1.0"
              description="An example of my client's page. I made a bunch of them 📱 🖥"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent
                img={p11}
                title="When I first started using Angular 2+"
              />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://ng-sports-store.web.app"
              github="https://github.com/BiggaHD/Balkan-Sports-Store"
              name="Balkan Sports Store"
              description="This was my first take on Angular 🏀"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent
                img={p12}
                title="It's Calorie tracker that saves your data into LS. It's made with pure vanilla JavaScript using the 'Module Pattern', ES6 features, Materialize CSS and Font Awesome for styling."
              />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://web-calorie-tracker.firebaseapp.com/"
              github="https://github.com/BiggaHD/Calorie_Tracker"
              name="Calorie Tracker"
              description="Track your calories and save data into LS 🍏"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent
                img={p13}
                title="Loan Calculator that will determine your estimated payments for loan amounts, interest rates and terms."
              />
            </LazyLoad>
            <WrokTemplate
              mainLink="https://web-loan-calculator.firebaseapp.com/"
              github="https://github.com/BiggaHD/Loan-Calculator-2.0"
              name="Loan Calculator 2.0"
              description="Estimated payments for loan amounts, interest rates and terms 📊"
            />
          </div>

          <div className="item">
            <LazyLoad>
              <ImageComponent img={p2} title="Bigga File Uploads" />
            </LazyLoad>

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
};

export default Work;
