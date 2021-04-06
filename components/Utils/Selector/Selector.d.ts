import React, { Dispatch, ReactElement, SetStateAction } from 'react';
interface SelectorProps {
    possibleValues: string[];
    values: string[];
    setValues: Dispatch<SetStateAction<string[]>>;
    renderValue: (value: string) => ReactElement;
    renderValues: (values: string[]) => ReactElement;
}
declare const _default: React.NamedExoticComponent<SelectorProps>;
export default _default;
