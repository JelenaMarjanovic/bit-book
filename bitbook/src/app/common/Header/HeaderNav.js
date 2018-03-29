import React from 'react'
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><Link to="/">Feed</Link></li>
            <li><Link to="/people/">People</Link></li>
            <li><Link to="/profile/">Profile</Link></li>
        </ul>
    )
}

export { HeaderNav }