import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { FC, memo, ReactNode, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Input.scss';

interface InputProps {
    value: string;
    setValue: (newValue: string) => void;
    label: ReactNode;
}

const Input: FC<InputProps> = ({ value, setValue, label }: InputProps) => {
    const onInputChange = useCallback((e) => setValue(e.target.value), [setValue]);
    const clearHandler = useCallback(() => setValue(''), [setValue]);

    const inputId = useMemo(() => uuidv4(), []);
    const showLabel = useMemo(() => value === '', [value]);

    return (
        <div className={styles.Input_container}>
            <input id={inputId} className={styles.Input} value={value} onChange={onInputChange} />
            <label htmlFor={inputId} className={clsx(styles.Input_label, showLabel && styles.Input_label__show)}>
                {label}
            </label>
            <span className={styles.Input_clear} onClick={clearHandler}>
                <FontAwesomeIcon icon={faTimesCircle} />
            </span>
        </div>
    );
};

export default memo(Input);
