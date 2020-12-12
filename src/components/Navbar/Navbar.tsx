import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.scss';

const Navbar = () => {

  return <nav className={styles.Navbar}>
    <Link to="/" className="Navbar-logo">
      
    </Link>
    <Link to="/install">
      <FontAwesomeIcon icon={faDownload} />
      Install
    </Link>
    <Link to="/icons">
      <FontAwesomeIcon icon={faIcons} />
      Icons
    </Link>
  </nav>;
};

export default Navbar;
