import React, { useState, useEffect, Suspense } from "react";
import ModalVideo from "react-modal-video";

import WrokTemplate from "./WrokTemplate";

import HighlightedApp from "./Highlighted/HighlightedApp";
import HighlightedHeader from "./Highlighted/HighlightedHeader";
import HighlightedDescription from "./Highlighted/HighlightedDescription";
import HighlightedList from "./Highlighted/HighlightedList";

import p1 from "../../assets/img/projects/p1.webp";
import p2 from "../../assets/img/projects/p2.webp";
import p3 from "../../assets/img/projects/p3.webp";
import p5 from "../../assets/img/projects/p5.webp";
import p6 from "../../assets/img/projects/p6.webp";
import p7 from "../../assets/img/projects/p7.webp";
import p8 from "../../assets/img/projects/p8.webp";
import p9 from "../../assets/img/projects/p9.webp";
import p10 from "../../assets/img/projects/p10.webp";
import p11 from "../../assets/img/projects/p11.webp";
import p12 from "../../assets/img/projects/p12.webp";
import p13 from "../../assets/img/projects/p13.webp";
import p14 from "../../assets/img/projects/p14.webp";
import p15 from "../../assets/img/projects/p15.webp";
import p16 from "../../assets/img/projects/p16.webp";
import p17 from "../../assets/img/projects/p17.webp";
import p18 from "../../assets/img/projects/p18.webp";

const ImageComponent = React.lazy(() => import("../helper/ImageComponent"));

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
            {/* Removed 3rd party package and implemented React.lazy && Suspense */}
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p1} title="Mars EMS" />
            </Suspense>

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
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent
                img={p7}
                title="It's a full stack app that uses a enormous tech stack -> My little versoion of SO :)"
              />
            </Suspense>

            <WrokTemplate
              mainLink="https://dev--spot.herokuapp.com/"
              github="https://github.com/BiggaHD/devSpot"
              name="Dev_Spot"
              description="It's a social network for developers 💻"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p6} title="reactive_movies" />
            </Suspense>

            <WrokTemplate
              mainLink="https://reactive-movies.firebaseapp.com/"
              github="https://github.com/BiggaHD/reactive_movies_db"
              name="Reactive Movie DB"
              description="A fast and beautiful web app that uses the TMDb API 🎬"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p15} title="Reactive RSS" />
            </Suspense>

            <WrokTemplate
              mainLink="https://reactive-rss-d3f9c.web.app"
              github="https://github.com/BiggaHD/Reactive-RSS"
              name="Reactive RSS"
              description="Great way to add, save, edit, delete, follow your RSS feeds 📰"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p5} title="miniStories" />
            </Suspense>

            <WrokTemplate
              mainLink="http://mini--stories.herokuapp.com/"
              github="https://github.com/BiggaHD/miniStories"
              name="miniStories"
              description="A mini social network site with many extras 📗"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p3} title="idea_x" />
            </Suspense>

            <WrokTemplate
              mainLink="http://idea--x.herokuapp.com/"
              github="https://github.com/BiggaHD/IDEA_x"
              name="idea_X"
              description="Save ideas for your next coding project 💡"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p17} title="client-panel" />
            </Suspense>

            <WrokTemplate
              mainLink="https://client-panel-2019.firebaseapp.com/"
              github="https://github.com/BiggaHD/client-panel"
              name="Client Panel"
              description=" Add clients, check/ change their balances, etc. 💶"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p16} title="iZEN" />
            </Suspense>

            <WrokTemplate
              mainLink="https://izen-250312.firebaseapp.com/"
              github="https://github.com/BiggaHD/iZEN"
              name="iZEN"
              description="Nice relaxing sounds & visuals to help you relax 🧘‍"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent
                img={p8}
                title="Build using React 16 + Redux --> It uses 'Open Weather API to display search results of temperatures of your favourite cities using visual graphs"
              />
            </Suspense>

            <WrokTemplate
              mainLink="https://reactive-clima.web.app/"
              github="https://github.com/BiggaHD/reactive-clima"
              name="Reactive Clima"
              description="Five-day forecast of your favorite cities ⛅"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent
                img={p9}
                title="This was the time when I switched from Angular to React"
              />
            </Suspense>

            <WrokTemplate
              mainLink="https://reactive-tube.web.app/"
              github="https://github.com/BiggaHD/Reactive-tube"
              name="Reactive Tube"
              description="React-Redux app that uses YouTube API 🎦"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent
                img={p10}
                title="My sesocnd Angular app that tracks your recipes and shopping list as well"
              />
            </Suspense>

            <WrokTemplate
              mainLink="https://ng-recipes-f4e6c.firebaseapp.com/"
              github="https://github.com/BiggaHD/Balkan_Recipe_Book"
              name="Balkan Recipe Book"
              description="Collect recipes and organize shopping list 🥗"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent
                img={p14}
                title="Create a profile, build the burger you like, order it, enjoy"
              />
            </Suspense>

            <WrokTemplate
              mainLink="https://reactive-hamburger.web.app/"
              github="https://github.com/BiggaHD/Reactive-Burger"
              name="Reactive Burger"
              description="Create a profile, build the burger you like, order it, enjoy 🍔"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p18} title="Example Website" />
            </Suspense>

            <WrokTemplate
              mainLink="https://evolwe-example-site.firebaseapp.com/"
              github="https://github.com/BiggaHD/evolWE"
              name="evolWe 1.0"
              description="An example of my client's page. I made a bunch of them 📱 🖥"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent
                img={p11}
                title="When I first started using Angular 2+"
              />
            </Suspense>

            <WrokTemplate
              mainLink="https://ng-sports-store.web.app"
              github="https://github.com/BiggaHD/Balkan-Sports-Store"
              name="Balkan Sports Store"
              description="This was my first take on Angular 🏀"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent
                img={p12}
                title="It's Calorie tracker that saves your data into LS. It's made with pure vanilla JavaScript using the 'Module Pattern', ES6 features, Materialize CSS and Font Awesome for styling."
              />
            </Suspense>

            <WrokTemplate
              mainLink="https://web-calorie-tracker.firebaseapp.com/"
              github="https://github.com/BiggaHD/Calorie_Tracker"
              name="Calorie Tracker"
              description="Track your calories and save data into LS 🍏"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent
                img={p13}
                title="Loan Calculator that will determine your estimated payments for loan amounts, interest rates and terms."
              />
            </Suspense>

            <WrokTemplate
              mainLink="https://web-loan-calculator.firebaseapp.com/"
              github="https://github.com/BiggaHD/Loan-Calculator-2.0"
              name="Loan Calculator 2.0"
              description="Estimated payments for loan amounts, interest rates and terms 📊"
            />
          </div>

          <div className="item">
            <Suspense fallback={<div className="loader"></div>}>
              <ImageComponent img={p2} title="Bigga File Uploads" />
            </Suspense>

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
