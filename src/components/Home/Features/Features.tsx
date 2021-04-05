import { faDownload, faHands, faRocket, faShapes, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EIcons, ECategory, EIconType } from 'bc-font/resources/icons';
import React, { FC } from 'react';

import Card from '../../Utils/Card/Card';

import styles from './Features.scss';

const Features: FC = () => (
    <div className={styles.Features}>
        <div className={styles.Features_card_list_container}>
            <div className={styles.Features_card_list}>
                <Card className={styles.Features_card} isInteractive>
                    <span className={styles.Features_card_icon} style={{ backgroundColor: 'var(--color-1-100)' }}>
                        <FontAwesomeIcon icon={faStar} style={{ color: 'var(--color-1-500)' }} />
                    </span>
                    <h1 className={styles.Features_card_title}>
                        <span>Incredible Quality</span>
                        <i style={{ backgroundColor: 'var(--color-1-100)' }} />
                    </h1>
                    <span>Beautiful, scalable icons thanks to SVG. Quality Indicator to control icon render.</span>
                </Card>
                <Card className={styles.Features_card} isInteractive>
                    <span className={styles.Features_card_icon} style={{ backgroundColor: 'var(--color-2-100)' }}>
                        <FontAwesomeIcon icon={faShapes} style={{ color: 'var(--color-2-500)' }} />
                    </span>
                    <h1 className={styles.Features_card_title}>
                        <span>Marvelous Choice</span>
                        <i style={{ backgroundColor: 'var(--color-2-100)' }} />
                    </h1>
                    <span>
                        {Object.keys(EIcons).length} icons classified into {Object.keys(ECategory).length} categories.
                        {` ${Object.keys(EIconType).length}`} icon types.
                    </span>
                </Card>
                <Card className={styles.Features_card} isInteractive>
                    <span className={styles.Features_card_icon} style={{ backgroundColor: 'var(--color-3-100)' }}>
                        <FontAwesomeIcon icon={faRocket} style={{ color: 'var(--color-3-500)' }} />
                    </span>
                    <h1 className={styles.Features_card_title}>
                        <span>Fast &amp; Lightweight</span>
                        <i style={{ backgroundColor: 'var(--color-3-100)' }} />
                    </h1>
                    <span>60 KB CSS file, font file as low as 550 KB.</span>
                </Card>
            </div>
            <div className={styles.Features_card_list}>
                <Card className={styles.Features_card} isInteractive>
                    <span className={styles.Features_card_icon} style={{ backgroundColor: 'var(--color-4-100)' }}>
                        <FontAwesomeIcon icon={faHands} style={{ color: 'var(--color-4-500)' }} />
                    </span>
                    <h1 className={styles.Features_card_title}>
                        <span>Open-Source</span>
                        <i style={{ backgroundColor: 'var(--color-4-100)' }} />
                    </h1>
                    <span>Add issues. Code. Contribute. BC-Font is proud to be open-source!</span>
                </Card>
                <Card className={styles.Features_card} isInteractive>
                    <span className={styles.Features_card_icon} style={{ backgroundColor: 'var(--color-5-100)' }}>
                        <FontAwesomeIcon icon={faDownload} style={{ color: 'var(--color-5-500)' }} />
                    </span>
                    <h1 className={styles.Features_card_title}>
                        <span>Multiple Formats</span>
                        <i style={{ backgroundColor: 'var(--color-5-100)' }} />
                    </h1>
                    <span>Choose from SVG files, desktop fonts, web fonts, NPM Package and CSS.</span>
                </Card>
            </div>
        </div>
    </div>
);

export default Features;
