import React from 'react'
import Strings from '../utils/Strings'
import Search from './navbar/Search'
import Links from './navbar/Links'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">{Strings.header.title}</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Links />
            <Search />
        </nav>
    )
}

export default Header
