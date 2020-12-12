import React from 'react';
import { faHands, faShapes, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from '../Card/Card';

import styles from './Home.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <Card>
        <FontAwesomeIcon icon={faStar} />
        Incredible Quality
      </Card>
      <Card>
        <FontAwesomeIcon icon={faShapes} />
        Marvelous Choice
      </Card>
      <Card>
        <FontAwesomeIcon icon={faHands} />
        Open-Source
      </Card>
    </div>
  );
};

export default Home;
