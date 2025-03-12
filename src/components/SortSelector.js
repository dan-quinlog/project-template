import React from 'react';
import './SortSelector.css';

function SortSelector({ sortDirection, onChange }) {
  return (
    <div className="sort-selector">
      <label htmlFor="sort-direction">Sort: </label>
      <select 
        id="sort-direction"
        value={sortDirection}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="ASC">Oldest First</option>
        <option value="DESC">Newest First</option>
      </select>
    </div>
  );
}

export default SortSelector;
