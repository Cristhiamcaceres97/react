import React from "react";
import SumComponent from "./SumComponent";

const DateSum = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Suma De Numeros</h1>
      <SumComponent numbers={numbers} />
    </div>
  );
};

export default DateSum;
