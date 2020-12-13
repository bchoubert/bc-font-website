import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import IconType from '../../../types/IconType';

import styles from './Icon.scss';

interface IconProps {
    icon: IconType;
    iconKey: string;
}

const Icon = ({ icon, iconKey }: IconProps): ReactElement => {
    const [isHover, setHover] = useState(false);

    return (
        <Link
            to={`/icon/${iconKey}`}
            className={styles.Icon}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span className={styles.Icon_container}>
                <i className={`icon ${icon.icon}`} style={{ color: isHover ? icon.color : 'var(--gray-800)' }} />
                <span className="Icon_label">{icon.name}</span>
            </span>
        </Link>
    );
};

export default Icon;
