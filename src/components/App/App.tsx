import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './../Navbar/Navbar';

import Home from './../Home/Home';
import Install from './../Install/Install';
import Icons from './../Icons/Icons';
import IconDetails from '../IconDetails/IconDetails';

import styles from './App.scss';

const App = (): ReactElement => (
    <div className={styles.App}>
        <Router>
            <Navbar />
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
                <Route path="/icon/:id">
                    <IconDetails />
                </Route>
            </Switch>
        </Router>
    </div>
);

export default App;
