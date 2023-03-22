import React from 'react';
import './User.css';

const User = (props) => {
    const {name, company, address, username, email, phone, website} =props.user;
    return (
        <div className='user'>
            <img className='' alt=''/>
            <h3>Name: {name}</h3>
            <h5>Username: {username}</h5>
            <p>City: {address.city}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default User;