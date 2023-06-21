import React from "react";

const SumComponent = ({ numbers }) => {
  const sum = numbers.reduce(
    (acumulator, currentValue) => acumulator + currentValue, 0 );

    return <h2>Suma: {sum}</h2>
};

export default SumComponent;
