import React from 'react'

import { HeaderNav } from './HeaderNav'

const Header = () => {
    return (
        <nav className="light-blue accent-3" role="navigation">
            <div className="container">
                <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Bit Book</a>
                    <HeaderNav />
                </div>
            </div>
        </nav>
    )
}

export { Header }