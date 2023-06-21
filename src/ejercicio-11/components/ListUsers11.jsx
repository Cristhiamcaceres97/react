import React, {useState} from 'react';
import UserDetails from './UserDetails';
import './ListUsers.css'

const ListUsers = ({users}) => {
    const [selectedUser, setSelectedUser] = useState (null);

    const handlUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            <h1> Lista De Usuarios </h1>
             <ul className='todo'>
                {users.map((user) => (
                <li key={user.id} onClick={() => handlUserClick(user)}>
                    {user.name} - {user.email}
                </li>
                ))}
             </ul>
             {selectedUser && <UserDetails user={selectedUser} />}
        </div>
    ) ;
};

export default ListUsers;