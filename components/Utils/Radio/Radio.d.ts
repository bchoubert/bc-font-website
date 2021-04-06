import React, { Dispatch, ReactNode, SetStateAction } from 'react';
interface RadioProps {
    values: string[];
    possibleValues: string[];
    setValues: Dispatch<SetStateAction<string[]>>;
    renderValue: (value: string) => ReactNode;
}
declare const _default: React.NamedExoticComponent<RadioProps>;
export default _default;
