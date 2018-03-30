import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {

    const { avatarUrl, name, aboutShort, userId} = user

    return (
        <Link to={`/people/${userId}`}>
        <li className="collection-item avatar" >
            <img src={avatarUrl} alt={name} className="circle" />
            <span> {name} </span>
            <br />
            <span className="title">{aboutShort}</span>
            <br />
            <p className="right">{user.getDate()}</p>
        </li>
        </Link>
    );
};

export { UserItem };