import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Card from '../Utils/Card/Card';

import Features from './Features/Features';
import styles from './Home.scss';
import Install from './Install/Install';

const Home = (): ReactElement => (
    <div className={styles.Home}>
        <div className={styles.Home_page}>
            <div className={styles.Home_left}>
                <Card className={styles.Home_left_card}>
                    <i className="icon icon-bcfont-logo" />
                    <h1>The icon font for IT Professionals.</h1>
                    <h4>Production-ready for your websites, resumes, flyers...</h4>
                </Card>
                <Link to="/icons" className={styles.Home_left_icons_link}>
                    <Card className={styles.Home_left_icons}>
                        <h2>Check the icons now!</h2>
                        <FontAwesomeIcon icon={faIcons} />
                    </Card>
                </Link>
            </div>
            <Features />
        </div>
        <Install />
    </div>
);

export default memo(Home);
