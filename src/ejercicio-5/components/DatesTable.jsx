import React from "react";
import ProductTable from "./ProductTableComponent";
import "./DatesTable.css"

const DatesTable = () => {
  const products = [
    { nombre: "Aguacate", precio: 10 },
    { nombre: "Papaya", precio: 20 },
    { nombre: "Guayaba", precio: 30 },
  ];

  return (
    <div>
      <h1>Tabla de productos:</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default DatesTable;
