import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EIcons, ECategoryDetails, ECategory } from 'bc-font/resources/icons';
import React, { memo, ReactElement, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import EIconQualityDetails from './../../types/EIconQualityDetails';
import Tooltip from './../Utils/Tooltip/Tooltip';
import IconCards from './IconCards/IconCards';
import styles from './IconDetails.scss';
import IconDetailsList from './IconDetailsList/IconDetailsList';
import IconQuality from './IconQuality/IconQuality';

const IconDetails = (): ReactElement => {
    const { id: iconKey } = useParams() as { id: string };

    const icon = useMemo(() => EIcons[iconKey], [iconKey]);

    const relatedIconKeys = useMemo(
        () => Object.keys(EIcons).filter((ik) => EIcons[ik].name === icon.name && ik !== iconKey),
        [iconKey],
    );

    const categories = useMemo(() => icon.categories.map((ck: ECategory) => ECategoryDetails[ck].title), [icon]);

    return (
        <div className={styles.IconDetails}>
            <Link to="/icons" className={styles.IconDetails_backlink}>
                <FontAwesomeIcon icon={faArrowCircleLeft} />
                Back to list
            </Link>
            <div className={styles.IconDetails_details}>
                <IconCards icon={icon} />
                <div className={styles.IconDetails_description}>
                    <h1>{icon.name}</h1>
                    <h4>{iconKey}</h4>
                    <h5>Categories: {categories.join(', ')}</h5>
                    <Tooltip content={EIconQualityDetails[icon.quality].description}>
                        <IconQuality quality={icon.quality} />
                    </Tooltip>
                </div>
            </div>
            <IconDetailsList icon={icon} />
            {relatedIconKeys.length > 0 ? (
                <div className={styles.IconDetails_related}>
                    <h3>Related icons</h3>
                    {relatedIconKeys.map((ik) => (
                        <Link
                            to={`/icon/${ik}`}
                            key={ik}
                            className={styles.IconDetails_related_item}
                            style={{ backgroundColor: EIcons[ik].color }}
                        >
                            <i className={`icon ${EIcons[ik].icon}`} />
                        </Link>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default memo(IconDetails);
