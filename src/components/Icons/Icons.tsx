import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EIcons } from 'bc-font/resources/icons';
import { ECategory, EIconType } from 'bc-font/resources/icons';
import React, { ReactElement, useState, useMemo } from 'react';

import 'bc-font/dist/bc-font.css';

import IconType from './../../types/IconType';
import Icon from './Icon/Icon';
import IconFilter from './IconFilter/IconFilter';
import styles from './Icons.scss';

const Icons = (): ReactElement => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [categories, setCategories] = useState<ECategory>(Object.keys(ECategory).filter((k) => k !== 'PERSONAL'));
    const [types, setTypes] = useState<EIconType>(Object.keys(EIconType));

    const iconsToShow: Record<string, IconType> = useMemo(() => {
        const iconKeysToShow = Object.keys(EIcons).filter((iconKey) => {
            if (searchValue && !EIcons[iconKey].name.toLowerCase().includes(searchValue.toLowerCase())) {
                return false;
            }

            if (!categories.some((cat: ECategory) => EIcons[iconKey].categories.includes(cat))) {
                return false;
            }

            if (!types.includes(EIcons[iconKey].type)) {
                return false;
            }

            return true;
        });

        return iconKeysToShow.reduce((res: Record<string, IconType>, key) => {
            res[key] = EIcons[key];
            return res;
        }, {});
    }, [searchValue, categories, types]);

    return (
        <div className={styles.Icons}>
            <IconFilter
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                categories={categories}
                setCategories={setCategories}
                types={types}
                setTypes={setTypes}
            />
            <div className={styles.Icons_list}>
                {Object.entries(iconsToShow).map(([iconKey, icon]) => (
                    <Icon key={iconKey} iconKey={iconKey} icon={icon as IconType} />
                ))}
                {Object.keys(iconsToShow).length === 0 ? (
                    <span className={styles.Icons_none}>
                        No icons to show
                        <FontAwesomeIcon icon={faFrown} />
                    </span>
                ) : null}
            </div>
        </div>
    );
};

export default Icons;
