import React from 'react';

const UserComponent = ({user}) => {
    return (
        <div>
            <h3>Nombre: {user.nombre}</h3>
            <h3>Edad: {user.edad}</h3>
            <h3>Ciudad: {user.ciudad}</h3>
        </div>
    );
};
export default UserComponent;


