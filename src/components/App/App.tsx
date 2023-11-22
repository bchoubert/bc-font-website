import React, { memo, ReactElement } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import IconDetails from '../IconDetails/IconDetails';

import Disclaimer from './../Disclaimer/Disclaimer';
import Footer from './../Footer/Footer';
import Home from './../Home/Home';
import Icons from './../Icons/Icons';
import styles from './App.scss';
import Layout from './Layout';

const App = (): ReactElement => (
    <div className={styles.App}>
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/icons" element={<Icons />} />
                    <Route path="/icon/:id" element={<IconDetails />} />
                </Route>
            </Routes>
        </HashRouter>
    </div>
);

export default memo(App);
