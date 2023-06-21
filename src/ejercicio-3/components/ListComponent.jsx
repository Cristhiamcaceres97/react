import React from "react";

const ListComponent = ({ number }) => {
  const items = [];
  for (let i = 0; i <= number; i++) {
    items.push(<li key={i}>Elemento {i}</li>);
  }

  return <ul>{items}</ul>;
};

export default ListComponent;
