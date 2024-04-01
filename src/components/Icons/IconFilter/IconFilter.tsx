import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ECategory, ECategoryDetails, EIconType } from 'bc-font/resources/icons';
import React, { ReactElement, memo, useCallback, FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import EIconTypeDetails from './../../../types/EIconTypeDetails';
import Input from './../../Utils/Input/Input';
import Radio from './../../Utils/Radio/Radio';
import Selector from './../../Utils/Selector/Selector';
import styles from './IconFilter.scss';

interface IconFilterProps {
    searchValue: string;
    setSearchValue: (val: string) => void;
    categories: string[];
    setCategories: Dispatch<SetStateAction<string[]>>;
    types: string[];
    setTypes: Dispatch<SetStateAction<string[]>>;
}

const IconFilter: FC<IconFilterProps> = ({
    searchValue,
    setSearchValue,
    categories,
    setCategories,
    types,
    setTypes,
}: IconFilterProps): ReactElement => {
    const renderIconType = useCallback(
        (iconType: EIconType) => (
            <>
                <FontAwesomeIcon icon={EIconTypeDetails[iconType].icon} />
                <span>{EIconTypeDetails[iconType].label}</span>
            </>
        ),
        [],
    );

    return (
        <div className={styles.IconFilter}>
            <Link to="/" className={styles.IconFilter_logo}>
                <i className="icon icon-bcfont-full" />
            </Link>
            <div className={styles.IconFilter_content}>
                <div className={styles.IconFilter_first}>
                    <Input
                        value={searchValue}
                        setValue={setSearchValue}
                        label={
                            <span>
                                <FontAwesomeIcon icon={faSearch} />
                                Search
                            </span>
                        }
                    />
                </div>
                <div className={styles.IconFilter_second}>
                    <Selector
                        possibleValues={Object.keys(ECategory).sort()}
                        values={categories}
                        setValues={setCategories}
                        renderValue={(valueKey) => ECategoryDetails[valueKey].title}
                        renderValues={(valueKeys) => (
                            <span>
                                {valueKeys.length}{' '}
                                <span className={styles.IconFilter_bigScreen}>selected categories</span>
                            </span>
                        )}
                    />
                    <Radio
                        values={types}
                        setValues={setTypes}
                        possibleValues={Object.keys(EIconType)}
                        renderValue={renderIconType}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(IconFilter);
