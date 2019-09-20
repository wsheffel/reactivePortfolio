import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Work from "./components/WorkComponent";
import Contact from "./components/ContactComponent";
import Footer from "./components/FooterComponent";
import Menu from "./components/NavbarComponent";
import "./style/App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} /> */}
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
