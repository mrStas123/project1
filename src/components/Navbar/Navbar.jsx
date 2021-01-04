import React from 'react'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => (
    <>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' >
                    HELLO
                        </Link>
                <ul className={'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' >
                            Home
                            </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/services'
                            className='nav-links'
                        >
                            Services
                            </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/products'
                            className='nav-links'
                        >
                            Products
                            </Link>
                    </li>
                    <li className='nav-btn'>
                        <Link to='/sign-up' className='btn-link'>
                            <Button buttonStyle='btn--outline'>SIGN UP</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
)


export default Navbar
