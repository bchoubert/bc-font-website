import { faClone } from '@fortawesome/free-regular-svg-icons';
import { faCode, faExternalLinkAlt, faGlobe, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import ClipboardService from './../../../services/Clipboard.service';
import IconType from './../../../types/IconType';
import styles from './IconDetailsList.scss';

interface IconDetailsListProps {
    icon: IconType;
}

const IconDetailsList: FC<IconDetailsListProps> = ({ icon }: IconDetailsListProps) => {
    if (!icon) {
        return null;
    }

    return (
        <div className={styles.IconDetailsList}>
            <a href={icon.website} target="_blank" rel="noopener noreferrer" className={styles.IconDetailsList_item}>
                <div
                    className={styles.IconDetailsList_item_icon}
                    style={{ backgroundColor: icon.color || 'var(--gray-900)' }}
                >
                    <FontAwesomeIcon icon={faGlobe} aria-label="website" />
                </div>
                <span className={styles.IconDetailsList_item_value}>{icon.website}</span>
                <div className={styles.IconDetailsList_item_action}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} aria-label="open" />
                </div>
            </a>
            {icon.color ? (
                <div
                    className={styles.IconDetailsList_item}
                    onClick={() => ClipboardService.copyToClipboard(icon.color || '')}
                >
                    <div
                        className={styles.IconDetailsList_item_icon}
                        style={{ backgroundColor: icon.color || 'var(--gray-900)' }}
                    >
                        <FontAwesomeIcon icon={faPalette} aria-label="color" />
                    </div>
                    <span className={styles.IconDetailsList_item_value}>{icon.color}</span>
                    <div className={styles.IconDetailsList_item_action}>
                        <FontAwesomeIcon icon={faClone} aria-label="copy" />
                    </div>
                </div>
            ) : null}
            <div className={styles.IconDetailsList_item} onClick={() => ClipboardService.copyToClipboard(icon.icon)}>
                <div
                    className={styles.IconDetailsList_item_icon}
                    style={{ backgroundColor: icon.color || 'var(--gray-900)' }}
                >
                    <FontAwesomeIcon icon={faCode} aria-label="code" />
                </div>
                <span className={styles.IconDetailsList_item_value}>{icon.icon}</span>
                <div className={styles.IconDetailsList_item_action}>
                    <FontAwesomeIcon icon={faClone} aria-label="copy" />
                </div>
            </div>
        </div>
    );
};

export default IconDetailsList;
