import { EIconQuality } from 'bc-font/resources/icons';
import clsx from 'clsx';
import React, { FC } from 'react';

import EIconQualityDetails from './../../../types/EIconQualityDetails';
import styles from './IconQuality.scss';

interface IconQualityProps {
    quality: EIconQuality;
}

const IconQuality: FC<IconQualityProps> = ({ quality }: IconQualityProps) => {
    return (
        <div className={styles.IconQuality}>
            {Object.keys(EIconQuality).map((qualityKey: EIconQuality) => (
                <span
                    className={clsx(styles.IconQuality_item, qualityKey === quality && styles.IconQuality_item__active)}
                    key={qualityKey}
                    style={{ backgroundColor: EIconQualityDetails[qualityKey].color }}
                >
                    {qualityKey === quality ? EIconQualityDetails[qualityKey].label : null}
                </span>
            ))}
        </div>
    );
};

export default IconQuality;
