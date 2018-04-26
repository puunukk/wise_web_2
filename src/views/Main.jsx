import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import React from "react";
import Work from "./Work";
import { Route, Switch } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/work" component={ Work } />
      <Route path="/project" component={ Project } />
      <Route path="/contact" component={ Contact } />
    </Switch>
  </main>
)

export default Main