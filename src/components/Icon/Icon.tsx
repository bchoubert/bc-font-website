import React, { useState } from 'react';
import IconType from '../../types/IconType';

import styles from './Icon.scss';

interface IconProps {
  icon: IconType;
};

const Icon = ({ icon }: IconProps) => {
  const [isHover, setHover] = useState(false);

  return <div className={styles.Icon} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <span className={styles.Icon_container}>
      <i className={`icon ${icon.icon}`} style={{ color: isHover ? icon.color : 'var(--gray-800)' }} />
    </span>
  </div>;
};

export default Icon;
