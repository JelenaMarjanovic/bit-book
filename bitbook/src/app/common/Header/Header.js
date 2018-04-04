import React from 'react'
import { Link } from 'react-router-dom';

import HeaderNav from './HeaderNav'

const Header = () => {
    return (
        <nav className="light-blue accent-3">
            <div className="container">
                <div className="nav-wrapper container"><Link to="/"><span id="logo-container" className="brand-logo">Bit Book</span></Link>
                    <HeaderNav />
                </div>
            </div>
        </nav>
    )
}

export { Header }