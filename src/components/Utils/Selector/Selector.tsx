import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { Dispatch, FC, memo, ReactElement, SetStateAction, useCallback, useState } from 'react';

import styles from './Selector.scss';

interface SelectorProps {
    possibleValues: string[];
    values: string[];
    setValues: Dispatch<SetStateAction<string[]>>;
    renderValue: (value: string) => ReactElement;
    renderValues: (values: string[]) => ReactElement;
}

const Selector: FC<SelectorProps> = ({
    possibleValues,
    values,
    setValues,
    renderValue,
    renderValues,
}: SelectorProps) => {
    const [isOpen, setOpen] = useState<boolean>(false);

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

    const selectAllHandler = useCallback(() => setValues([...possibleValues]), [setValues, possibleValues]);
    const deselectAllHandler = useCallback(() => setValues([]), [setValues]);

    const renderPossibleValue = useCallback(
        (possibleValueKey: string) => (
            <div className={styles.Selector_item} onClick={() => onItemClick(possibleValueKey)} key={possibleValueKey}>
                <div className={styles.Selector_item_checkbox_container}>
                    <FontAwesomeIcon
                        className={styles.Selector_item_checkbox}
                        icon={values.includes(possibleValueKey) ? faCheckCircle : faCircle}
                    />
                </div>
                {renderValue(possibleValueKey)}
            </div>
        ),
        [values],
    );
    const openHandler = useCallback(() => setOpen((oldOpen) => !oldOpen), [setOpen]);

    if (!values || !possibleValues) {
        return null;
    }

    return (
        <div className={styles.Selector}>
            <div className={styles.Selector_field} onClick={openHandler}>
                {renderValues(values)}
            </div>
            <FontAwesomeIcon className={styles.Selector_caret} icon={faCaretDown} />
            <div className={clsx(styles.Selector_drop, isOpen && styles.Selector_drop__open)}>
                <div className={styles.Selector_actions}>
                    <span className={styles.Selector_action} onClick={deselectAllHandler}>
                        Deselect all
                    </span>
                    <span className={styles.Selector_action} onClick={selectAllHandler}>
                        Select all
                    </span>
                </div>
                {possibleValues.map(renderPossibleValue)}
            </div>
        </div>
    );
};

export default memo(Selector);
