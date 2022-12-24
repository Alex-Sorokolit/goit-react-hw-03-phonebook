import React from 'react';
import { nanoid } from 'nanoid';

// Генератор випадкових id
const filterInputId = nanoid();

const Filter = ({ value, changeFilter }) => {
  return (
    <label htmlFor={filterInputId}>
      Find contact by name:
      <input
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
        id={filterInputId}
      />
    </label>
  );
};

export default Filter;
