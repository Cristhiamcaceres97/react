import React, { useState } from 'react';

const FilterComponent = ({ names }) => {
  const [filteredNames, setFilteredNames] = useState([]);

  const handleFilter = (event) => {
    const filterValue = event.target.value.toLowerCase();
    const filteredList = names.filter((name) =>
      name.toLowerCase().includes(filterValue)
    );
    setFilteredNames(filteredList);
  };

  return (
    <div>
      <input type="text" onChange={handleFilter} placeholder="Filtrar nombres" />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
