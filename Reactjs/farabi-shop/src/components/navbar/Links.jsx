import React from 'react'
import Strings from '../../utils/Strings'
import { Link, withRouter } from 'react-router-dom'
import DropdownCart from './DropdownCart'
import CountSpan from '../CountSpan'

function Links(props) {
    const links = [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'aboutUs',
            path: '/about-us'
        },
        {
            name: 'contactUs',
            path: '/contact-us'
        }
    ]
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                {
                    links.map((item, index) => 
                        <li
                            key={index}
                            className={`nav-item ${props.location.pathname === item.path ? 'active' : ''}`}
                        >
                            <Link to={item.path} className="nav-link">
                                {Strings.header[item.name]}
                            </Link>
                        </li>
                    )
                }
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <CountSpan size='lg' top='-5px' right='0'/>
                        {Strings.cart}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <DropdownCart />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Links)
