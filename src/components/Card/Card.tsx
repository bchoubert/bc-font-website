import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';

import styles from './Card.scss';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps): ReactElement => (
    <div className={clsx(styles.Card, className)}>{children}</div>
);

export default Card;
