import React from "react";
import CounterComponent from "./CounterComponent";
import './Contador.css'

const CounterDates = () => {
  const initialValue = 0;
  return (
    <div>
      <h1><center>Contador</center></h1>
      <CounterComponent initialValue={initialValue} />
    </div>
  );
};

export default CounterDates;
