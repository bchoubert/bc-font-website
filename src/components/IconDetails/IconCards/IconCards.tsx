import React, { FC } from 'react';
import IconType from 'types/IconType';

import styles from './IconCards.scss';

interface IconCardsProps {
    icon: IconType;
}

const IconCards: FC<IconCardsProps> = ({ icon }: IconCardsProps) => {
    return (
        <div className={styles.IconCards}>
            <div className={styles.IconCards_top} style={{ backgroundColor: icon.color || 'var(--gray-900)' }}>
                <i className={`icon ${icon.icon}`} />
                {icon.new ? <i className={styles.IconCards_top__new}>NEW</i> : null}
            </div>
            <div className={styles.IconCards_bottom}>
                <div className={styles.IconCards_bottom_left} style={{ color: icon.color || 'var(--gray-900)' }}>
                    <i className={`icon ${icon.icon}`} />
                </div>
                <div className={styles.IconCards_bottom_right}>
                    <i className={`icon ${icon.icon}`} />
                </div>
            </div>
        </div>
    );
};

export default IconCards;
