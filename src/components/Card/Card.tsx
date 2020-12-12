import React from 'react';

import styles from './Card.scss';

interface CardProps {
  children: any;
};

const Card = ({ children }: CardProps) => {
  return <div className={styles.Card}>
    {children}
  </div>;
};

export default Card;
