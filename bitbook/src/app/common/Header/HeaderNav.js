import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const HeaderNav = (props) => {
    const logout = () => {
        localStorage.setItem("sessionID", "");
        props.history.push("/")
    }
    return (
        <ul className="right hide-on-med-and-down">
            <li><Link to="/">Feed</Link></li>
            <li><Link to="/people/">People</Link></li>
            <li><Link to="/profile/">Profile</Link></li>
            <li><a onClick={logout}>Logout</a></li>
        </ul>
    )
}

export default withRouter(HeaderNav)