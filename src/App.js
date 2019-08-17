import React, { Fragment } from "react";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
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
