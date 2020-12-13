import React, { ReactElement, useState } from 'react';
import { ECategory } from 'bc-font/resources/icons';
import clsx from 'clsx';

import styles from './IconFilter.scss';

const IconFilter = (): ReactElement => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [category, setCategory] = useState<ECategory>('ALL');

    return (
        <div className={clsx(styles.IconFilter)}>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
};

export default IconFilter;
