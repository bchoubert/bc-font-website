import React, { memo, ReactElement } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import IconDetails from '../IconDetails/IconDetails';

import Disclaimer from './../Disclaimer/Disclaimer';
import Footer from './../Footer/Footer';
import Home from './../Home/Home';
import Icons from './../Icons/Icons';
import styles from './App.scss';

const App = (): ReactElement => (
    <div className={styles.App}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/disclaimer">
                    <Disclaimer />
                </Route>
                <Route exact path="/icons">
                    <Icons />
                </Route>
                <Route path="/icon/:id">
                    <IconDetails />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </div>
);

export default memo(App);
