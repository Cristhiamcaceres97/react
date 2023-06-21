import React from "react";

const ProductTable = ({ products }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.nombre}</td>
            <td>{product.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
