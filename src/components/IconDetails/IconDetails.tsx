import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './IconDetails.scss';

const IconDetails = () => {
  const { id: iconKey } = useParams() as { id: string };

  return <div className={styles.IconDetails}>
    ICON DETAILS {iconKey}
  </div>;
}

export default IconDetails;
