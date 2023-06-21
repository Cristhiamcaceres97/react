import React from 'react';
import UserComponent from './UserComponent';

const DatosDos = () => {
  const user = {
    nombre: 'Cristhiam',
    edad: 26,
    ciudad: 'Cucuta'
  };

  return (
    <div>
      <h1>Información del usuario:</h1>
      <UserComponent user={user} />
    </div>
  );
};

export default DatosDos;
