import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.scss';

const Footer: FC = () => (
    <div className={styles.Footer}>
        <span>
            Developed by{' '}
            <a href="https://chbe.fr" target="_blank" rel="noreferrer">
                Bertrand Choubert
            </a>
        </span>
        <div className={styles.Footer_links}>
            <Link to="/disclaimer">Disclaimer</Link>
            <a href="https://github.com/bchoubert/bc-font" target="_blank" rel="noreferrer">
                GitHub
            </a>
            <a href="https://www.npmjs.com/package/bc-font" target="_blank" rel="noreferrer">
                NPM
            </a>
        </div>
    </div>
);

export default Footer;
