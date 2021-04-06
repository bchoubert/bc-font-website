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
            <div className={styles.IconQuality_list}>
                {Object.keys(EIconQuality).map((qualityKey: EIconQuality) => (
                    <span
                        className={clsx(
                            styles.IconQuality_list_item,
                            qualityKey === quality && styles.IconQuality_list_item__active,
                        )}
                        key={qualityKey}
                        style={{ backgroundColor: EIconQualityDetails[qualityKey].color }}
                    >
                        {qualityKey === quality ? EIconQualityDetails[qualityKey].label : null}
                    </span>
                ))}
            </div>
            <span className={styles.IconQuality_label}>Quality</span>
        </div>
    );
};

export default IconQuality;
