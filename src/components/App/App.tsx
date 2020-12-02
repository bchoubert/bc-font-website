import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './../Navbar/Navbar';

import Home from './../Home/Home';
import Install from './../Install/Install';
import Icons from './../Icons/Icons';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/install">
            <Install />
          </Route>
          <Route exact path="/icons">
            <Icons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
