import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import IconType from '../../../types/IconType';

import styles from './Icon.scss';

interface IconProps {
    icon: IconType;
    iconKey: string;
}

const Icon = ({ icon, iconKey }: IconProps): ReactElement => {
    return (
        <Link to={`/icon/${iconKey}`} className={styles.Icon}>
            <span className={styles.Icon_container}>
                <i className={`icon ${icon.icon}`} style={{ color: icon.color || 'var(--gray-900)' }} />
                <span className="Icon_label">{icon.name}</span>
                <i className={styles.Icon_circle} style={{ backgroundColor: icon.color || 'var(--gray-900)' }} />
            </span>
        </Link>
    );
};

export default Icon;
