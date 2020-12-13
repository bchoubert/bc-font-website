import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import styles from './IconDetails.scss';

const IconDetails = (): ReactElement => {
    const { id: iconKey } = useParams() as { id: string };

    return <div className={styles.IconDetails}>ICON DETAILS {iconKey}</div>;
};

export default IconDetails;
