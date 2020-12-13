import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BcFontFullIcon from 'bc-font/icons/bcfont-full.svg';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.scss';

const Navbar = (): ReactElement => (
    <nav className={styles.Navbar}>
        <Link to="/" className="Navbar-logo">
            <BcFontFullIcon />
        </Link>
        <Link to="/install">
            <FontAwesomeIcon icon={faDownload} />
            Install
        </Link>
        <Link to="/icons">
            <FontAwesomeIcon icon={faIcons} />
            Icons
        </Link>
    </nav>
);

export default Navbar;
