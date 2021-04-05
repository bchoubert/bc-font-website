import { EIcons } from 'bc-font/resources/icons';
import React, { FC } from 'react';

import styles from './Disclaimer.scss';

const Disclaimer: FC = () => (
    <div className={styles.Disclaimer}>
        <h1>Disclaimer</h1>
        <p>
            BC-Font icons can be used freely, respecting the authors&quot; guidelines and rules. It is provided as-is
            and without any guarantee. BC-Font gathers icons and work that might be copyrighted by the following
            entities:
        </p>
        <p>
            {Object.keys(EIcons)
                .filter((i: string, idx: number) => {
                    const foundIdx = Object.keys(EIcons).findIndex(
                        (i2: string) => EIcons[i].website === EIcons[i2].website,
                    );
                    return idx === foundIdx;
                })
                .filter((i: string) => EIcons[i].website && !EIcons[i].icon.includes(EIcons[i].name))
                .map((i: string) => (
                    <a
                        key={i}
                        href={EIcons[i].website}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: EIcons[i].color }}
                    >
                        {EIcons[i].name}
                    </a>
                ))}
        </p>
    </div>
);

export default Disclaimer;
