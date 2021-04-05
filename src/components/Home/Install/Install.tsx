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

import Card from '../../Utils/Card/Card';

import styles from './Install.scss';

const Install = (): ReactElement => (
    <div className={styles.Install}>
        <h1>Download &amp; Install</h1>
        <div className={styles.Install_content}>
            <div className={styles.Install_card_list_container}>
                <div className={styles.Install_card_list}>
                    <Card
                        className={styles.Install_card}
                        style={{ border: '4px solid var(--color-7-500)' }}
                        isInteractive
                    >
                        <span
                            className={styles.Install_card_icon}
                            style={{ color: 'var(--white-500)', backgroundColor: 'var(--color-7-500)' }}
                        >
                            <FontAwesomeIcon icon={faFont} />
                        </span>
                        <h1 className={styles.Install_card_title}>TTF, EOT, WOFF Files</h1>
                        <span>
                            Download the package, install font files that are in the dist/ directory, and start to use
                            them immediately!
                        </span>
                        <a
                            href="https://github.com/bchoubert/bc-font/tree/master/dist"
                            target="_blank"
                            rel="noreferrer"
                            style={{ backgroundColor: 'var(--color-7-500)', color: 'var(--white-500)' }}
                        >
                            See font files
                        </a>
                    </Card>
                    <Card
                        className={styles.Install_card}
                        style={{ border: '4px solid var(--color-6-500)' }}
                        isInteractive
                    >
                        <span
                            className={styles.Install_card_icon}
                            style={{ color: 'var(--white-500)', backgroundColor: 'var(--color-6-500)' }}
                        >
                            <FontAwesomeIcon icon={faBezierCurve} />
                        </span>
                        <h1 className={styles.Install_card_title}>SVG Files</h1>
                        <span>
                            Download the package, and start using the SVG files present in the icons/ directory.
                        </span>
                        <a
                            href="https://github.com/bchoubert/bc-font/tree/master/icons"
                            target="_blank"
                            rel="noreferrer"
                            style={{ backgroundColor: 'var(--color-6-500)', color: 'var(--white-500)' }}
                        >
                            See SVG files
                        </a>
                    </Card>
                    <Card
                        className={styles.Install_card}
                        style={{ border: '4px solid var(--color-5-500)' }}
                        isInteractive
                    >
                        <span
                            className={styles.Install_card_icon}
                            style={{ color: 'var(--white-500)', backgroundColor: 'var(--color-5-500)' }}
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </span>
                        <h1 className={styles.Install_card_title}>Web Fonts</h1>
                        <span>Directly link the files using @font-face CSS properties pointing to the hoster.</span>
                        <a
                            href="https://github.com/bchoubert/bc-font/tree/master/dist"
                            target="_blank"
                            rel="noreferrer"
                            style={{ backgroundColor: 'var(--color-5-500)', color: 'var(--white-500)' }}
                        >
                            See CSS files
                        </a>
                    </Card>
                </div>
                <div className={styles.Install_card_list}>
                    <Card
                        className={styles.Install_card}
                        style={{ border: '4px solid var(--color-4-500)' }}
                        isInteractive
                    >
                        <span
                            className={styles.Install_card_icon}
                            style={{ color: 'var(--white-500)', backgroundColor: 'var(--color-4-500)' }}
                        >
                            <FontAwesomeIcon icon={faCompressAlt} />
                        </span>
                        <h1 className={styles.Install_card_title}>Web CSS Files</h1>
                        <span>
                            Import directly the hosted CSS file from the hoster into your project, using either link
                            tags or @import CSS function.
                        </span>
                        <a
                            href="https://github.com/bchoubert/bc-font/tree/master/dist"
                            target="_blank"
                            rel="noreferrer"
                            style={{ backgroundColor: 'var(--color-4-500)', color: 'var(--white-500)' }}
                        >
                            See CSS files
                        </a>
                    </Card>
                    <Card
                        className={styles.Install_card}
                        style={{ border: '4px solid var(--color-3-500)' }}
                        isInteractive
                    >
                        <span
                            className={styles.Install_card_icon}
                            style={{ color: 'var(--white-500)', backgroundColor: 'var(--color-3-500)' }}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                        </span>
                        <h1 className={styles.Install_card_title}>Package Download</h1>
                        <span>
                            Download the entire package and link the CSS file in the dist/ directory in your HTML files.
                        </span>
                        <a
                            href="https://github.com/bchoubert/bc-font"
                            target="_blank"
                            rel="noreferrer"
                            style={{ backgroundColor: 'var(--color-3-500)', color: 'var(--white-500)' }}
                        >
                            See Package on GitHub
                        </a>
                    </Card>
                    <Card
                        className={styles.Install_card}
                        style={{ border: '4px solid var(--color-2-500)' }}
                        isInteractive
                    >
                        <span
                            className={styles.Install_card_icon}
                            style={{ color: 'var(--white-500)', backgroundColor: 'var(--color-2-500)' }}
                        >
                            <FontAwesomeIcon icon={faFileArchive} />
                        </span>
                        <h1 className={styles.Install_card_title}>NPM Package</h1>
                        <span>
                            Use NPM or Yarn to install the project. Use link afterwards to link to the CSS Files.
                        </span>
                        <a
                            href="https://www.npmjs.com/package/bc-font"
                            target="_blank"
                            rel="noreferrer"
                            style={{ backgroundColor: 'var(--color-2-500)', color: 'var(--white-500)' }}
                        >
                            See NPM Package
                        </a>
                    </Card>
                </div>
            </div>
        </div>
    </div>
);

export default Install;
