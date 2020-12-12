import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ECategory } from 'bc-font/resources/icons';

import styles from './IconFilter.scss';

const IconFilter = () => {

  console.log(ECategory)

  const [searchValue, setSearchValue] = useState<string>('');
  const [category, setCategory] = useState<ECategory>('ALL');

  return <div className={styles.IconFilter}>
    <FontAwesomeIcon icon={faSearch} />
    <input
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search..." />
  </div>;
};

export default IconFilter;
