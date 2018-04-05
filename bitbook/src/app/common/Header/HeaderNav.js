import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';

const HeaderNav = (props) => {
    const logout = () => {
        localStorage.setItem("sessionID", "");
        props.history.push("/")
    }
    return (
        <Fragment>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Feed</Link></li>
                <li><Link to="/people/">People</Link></li>
                <li><Link to="/profile/">Profile</Link></li>
                <li><a onClick={logout}>Logout</a></li>
            </ul>
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Feed</Link></li>
                <li><Link to="/people/">People</Link></li>
                <li><Link to="/profile/">Profile</Link></li>
                <li><a onClick={logout}>Logout</a></li>
            </ul>
        </Fragment>
    )
}

export default withRouter(HeaderNav)