import React, {useState} from 'react';


const UserDetails = ({user}) => {
    return(
        <div>
            <h4>{user.name}</h4>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetails;