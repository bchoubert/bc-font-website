import React from 'react';
import { EIcons } from 'bc-font/resources/icons';

import Icon from '../Icon/Icon';
import IconType from '../../types/IconType';
import IconFilter from '../IconFilter/IconFilter';

import 'bc-font/dist/bc-font.css';

import styles from './Icons.scss';

const Icons = () => {
  return <div className={styles.Icons}>
    <IconFilter />
    <div className="Icons-list">
      {Object.entries(EIcons).map(([iconKey, icon]) => <Icon key={iconKey} icon={icon as IconType} />)}
    </div>
  </div>;
};

export default Icons;
