import React from 'react';
import FilterComponent from './FilterComponent';

const DatesFilter = () => {
    const names = ["Saidy" , "Andres", "Camilo", "Cristhiam", "Lucy"];
    return(
        <div>
            <h1>Filtrar Nombres</h1>
            <FilterComponent names={names}/>
        </div>
    );
};

export default DatesFilter;