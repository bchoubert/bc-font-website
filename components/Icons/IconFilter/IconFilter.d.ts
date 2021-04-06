import React, { Dispatch, SetStateAction } from 'react';
interface IconFilterProps {
    searchValue: string;
    setSearchValue: (val: string) => void;
    categories: string[];
    setCategories: Dispatch<SetStateAction<string[]>>;
    types: string[];
    setTypes: Dispatch<SetStateAction<string[]>>;
}
declare const _default: React.NamedExoticComponent<IconFilterProps>;
export default _default;
