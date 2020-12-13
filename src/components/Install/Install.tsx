import {
    faBezierCurve,
    faCompressAlt,
    faDownload,
    faFileArchive,
    faFont,
    faLink,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import Card from './../Card/Card';
import styles from './Install.scss';

const Install = (): ReactElement => (
    <div className={styles.Install}>
        <div className={styles.Install_content}>
            <Card className={styles.Install_content_side}>
                <h1>Various ways to install and begin to use!</h1>
            </Card>
            <div className={styles.Install_card_list_container}>
                <div className={styles.Install_card_list}>
                    <Card className={styles.Install_card}>
                        <span className={styles.Install_card_icon}>
                            <FontAwesomeIcon icon={faFont} />
                        </span>
                        <h1 className={styles.Install_card_title}>TTF, EOT, WOFF Files</h1>
                        <span>
                            Download the package, install font files that are in the dist/ directory, and start to use
                            them immediately!
                        </span>
                    </Card>
                    <Card className={styles.Install_card}>
                        <span className={styles.Install_card_icon}>
                            <FontAwesomeIcon icon={faBezierCurve} />
                        </span>
                        <h1 className={styles.Install_card_title}>SVG Files</h1>
                        <span>Download the package, and start using the SVG files presnt in the icons/ directory.</span>
                    </Card>
                    <Card className={styles.Install_card}>
                        <span className={styles.Install_card_icon}>
                            <FontAwesomeIcon icon={faLink} />
                        </span>
                        <h1 className={styles.Install_card_title}>Web Fonts</h1>
                        <span>Directly link the files using @font-face CSS properties pointing to the hoster.</span>
                    </Card>
                </div>
                <div className={styles.Install_card_list}>
                    <Card className={styles.Install_card}>
                        <span className={styles.Install_card_icon}>
                            <FontAwesomeIcon icon={faCompressAlt} />
                        </span>
                        <h1 className={styles.Install_card_title}>Web CSS Files</h1>
                        <span>
                            Import directly the hosted CSS file from the hoster into your project, using either link
                            tags or @import CSS function.
                        </span>
                    </Card>
                    <Card className={styles.Install_card}>
                        <span className={styles.Install_card_icon}>
                            <FontAwesomeIcon icon={faDownload} />
                        </span>
                        <h1 className={styles.Install_card_title}>Package Download</h1>
                        <span>
                            Download the entire package and link the CSS file in the dist/ directory in your HTML files.
                        </span>
                    </Card>
                    <Card className={styles.Install_card}>
                        <span className={styles.Install_card_icon}>
                            <FontAwesomeIcon icon={faFileArchive} />
                        </span>
                        <h1 className={styles.Install_card_title}>NPM Package</h1>
                        <span>
                            Use NPM or Yarn to install the project. Use link afterwards to link to the CSS Files.
                        </span>
                    </Card>
                </div>
            </div>
        </div>
    </div>
);

export default Install;
