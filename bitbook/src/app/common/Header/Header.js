import React from 'react'
import { Link } from 'react-router-dom';

import HeaderNav from './HeaderNav'
import M from 'materialize-css'

const Header = () => {
    return (
        <nav className="light-blue accent-3">
            <div className="nav-extended container">
                <div className="nav-wrapper container"><Link to="/"><span id="logo-container" className="brand-logo">Bit Book</span></Link>
                    <HeaderNav />
                </div>
            </div>
        </nav>
    )
}

export { Header }