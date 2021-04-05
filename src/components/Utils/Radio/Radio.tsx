import clsx from 'clsx';
import React, { Dispatch, FC, ReactNode, SetStateAction, useCallback } from 'react';

import styles from './Radio.scss';

interface RadioProps {
    values: string[];
    possibleValues: string[];
    setValues: Dispatch<SetStateAction<string[]>>;
    renderValue: (value: string) => ReactNode;
}

const Radio: FC<RadioProps> = ({ values, possibleValues, setValues, renderValue }: RadioProps) => {
    const onItemClick = useCallback(
        (possibleValueKey: string) => {
            setValues((oldValues: string[]) => {
                if (oldValues.includes(possibleValueKey)) {
                    return [...oldValues.filter((v: string) => v !== possibleValueKey)];
                } else {
                    return [...oldValues, possibleValueKey];
                }
            });
        },
        [setValues],
    );

    const renderItem = useCallback(
        (valueKey) => (
            <div
                className={clsx(styles.Radio_item, values.includes(valueKey) && styles.Radio_item__selected)}
                onClick={() => onItemClick(valueKey)}
            >
                {renderValue(valueKey)}
            </div>
        ),
        [renderValue, values],
    );

    return <div className={styles.Radio}>{possibleValues.map(renderItem)}</div>;
};

export default Radio;
