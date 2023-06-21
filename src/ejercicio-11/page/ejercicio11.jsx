/* Crear un componente que reciba como propiedad un arreglo de objetos con información de usuarios y muestre una lista con sus nombres y correos electrónicos. Al hacer clic en un usuario de la lista, debe mostrarse su información detallada en una sección aparte. */

import React from "react";
import ListUsers from "../components/ListUsers11";

function ejercicio11() {
  const users = [
    { id: 1, name: "Cristhiam Caceres", email: "cacerescleber@gmail.com" },
    { id: 2, name: "Andres Caceres", email: "cesar@gmail.com" },
    { id: 3, name: "Saidy Vidales", email: "vidales@gmail.com" },
  ];

  return <ListUsers users={users} />;
}

export default ejercicio11;
