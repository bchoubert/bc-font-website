import React, { ReactElement } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import IconDetails from '../IconDetails/IconDetails';

import Home from './../Home/Home';
import Icons from './../Icons/Icons';
import Install from './../Install/Install';
import Navbar from './../Navbar/Navbar';
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
