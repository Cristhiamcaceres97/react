import React from "react";
import ListComponent from "./ListComponent";

const DatesList = () => {
  const number = 5;

  return (
    <div>
      <h1>Lista De Componentes</h1>
      <ListComponent number={number} />
    </div>
  );
};

export default DatesList;
