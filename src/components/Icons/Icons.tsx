import { EIcons } from 'bc-font/resources/icons';
import React, { ReactElement } from 'react';

import 'bc-font/dist/bc-font.css';

import IconType from './../../types/IconType';
import Card from './../Card/Card';
import IconFilter from './../IconFilter/IconFilter';
import Icon from './Icon/Icon';
import styles from './Icons.scss';

const Icons = (): ReactElement => (
    <div className={styles.Icons}>
        <IconFilter />
        <Card className={styles.Icons_list}>
            {Object.entries(EIcons).map(([iconKey, icon]) => (
                <Icon key={iconKey} iconKey={iconKey} icon={icon as IconType} />
            ))}
        </Card>
    </div>
);

export default Icons;
