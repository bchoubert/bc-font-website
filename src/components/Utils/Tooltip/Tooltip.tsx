import React, { FC, ReactNode, useState } from 'react';

import styles from './Tooltip.scss';

interface TooltipProps {
    content: ReactNode | string;
    children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ content, children }: TooltipProps) => {
    const [isHover, setHover] = useState<boolean>(false);

    return (
        <div
            className={styles.Tooltip}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
        >
            {children}
            {isHover && <span className={styles.Tooltip_content}>{content}</span>}
        </div>
    );
};

export default Tooltip;
