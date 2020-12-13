import { EIcons } from 'bc-font/resources/icons';
import React, { ReactElement } from 'react';

import IconType from '../../types/IconType';
import Icon from '../Icon/Icon';
import IconFilter from '../IconFilter/IconFilter';

import 'bc-font/dist/bc-font.css';

import styles from './Icons.scss';

const Icons = (): ReactElement => {
    return (
        <div className={styles.Icons}>
            <IconFilter />
            <div className={styles.Icons_list}>
                {Object.entries(EIcons).map(([iconKey, icon]) => (
                    <Icon key={iconKey} iconKey={iconKey} icon={icon as IconType} />
                ))}
            </div>
        </div>
    );
};

export default Icons;
