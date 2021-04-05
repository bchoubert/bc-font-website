import clsx from 'clsx';
import React, { ReactElement, ReactNode, CSSProperties } from 'react';

import styles from './Card.scss';

interface CardProps {
    children: ReactNode;
    className?: string;
    isInteractive?: boolean;
    style?: CSSProperties;
}

const Card = ({ children, className, isInteractive, style }: CardProps): ReactElement => (
    <div className={clsx(styles.Card, className, isInteractive && styles.Card_interactive)} style={style}>
        {children}
    </div>
);

export default Card;
