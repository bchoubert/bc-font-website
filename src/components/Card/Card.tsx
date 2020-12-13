import React, { ReactElement, ReactNode } from 'react';

import styles from './Card.scss';

interface CardProps {
    children: ReactNode;
}

const Card = ({ children }: CardProps): ReactElement => {
    return <div className={styles.Card}>{children}</div>;
};

export default Card;
