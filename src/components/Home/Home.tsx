import { faDownload, faHands, faRocket, faShapes, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EIcons, ECategory, EIconType } from 'bc-font/resources/icons';
import React, { ReactElement } from 'react';

import Card from '../Card/Card';

import styles from './Home.scss';

const Home = (): ReactElement => (
    <div className={styles.Home}>
        <div className={styles.Home_content}>
            <div className={styles.Home_card_list_container}>
                <div className={styles.Home_card_list}>
                    <Card className={styles.Home_card}>
                        <span className={styles.Home_card_icon}>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        <h1 className={styles.Home_card_title}>Incredible Quality</h1>
                        <span>Beautiful, scalable icons thanks to SVG. Quality Indicator to control icon render.</span>
                    </Card>
                    <Card className={styles.Home_card}>
                        <span className={styles.Home_card_icon}>
                            <FontAwesomeIcon icon={faShapes} />
                        </span>
                        <h1 className={styles.Home_card_title}>Marvelous Choice</h1>
                        <span>
                            {Object.keys(EIcons).length} icons classified into {Object.keys(ECategory).length}{' '}
                            categories.
                            {` ${Object.keys(EIconType).length}`} icon types.
                        </span>
                    </Card>
                    <Card className={styles.Home_card}>
                        <span className={styles.Home_card_icon}>
                            <FontAwesomeIcon icon={faRocket} />
                        </span>
                        <h1 className={styles.Home_card_title}>Fast &amp; Lightweight</h1>
                        <span>60 KB CSS file, font file as low as 550 KB.</span>
                    </Card>
                </div>
                <div className={styles.Home_card_list}>
                    <Card className={styles.Home_card}>
                        <span className={styles.Home_card_icon}>
                            <FontAwesomeIcon icon={faHands} />
                        </span>
                        <h1 className={styles.Home_card_title}>Open-Source</h1>
                        <span>Add issues. Code. Contribute. BC-Font is proud to be open-source!</span>
                    </Card>
                    <Card className={styles.Home_card}>
                        <span className={styles.Home_card_icon}>
                            <FontAwesomeIcon icon={faDownload} />
                        </span>
                        <h1 className={styles.Home_card_title}>Multiple Formats</h1>
                        <span>Choose from SVG files, desktop fonts, web fonts, NPM Package and CSS.</span>
                    </Card>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
