import React, { useEffect, useState } from 'react';
import User from './User/User';
import './Users.css';

const Users = () => {
    
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => setUsers(data))
    },[])
   
    return (
        <div>
            <h4>Total User: {users.length}</h4>
            <div className='user-container'>
                {
                    users.map(user => <User user={user} key={user.id} ></User>)
                }
            </div>
        </div>

    );
};

export default Users;