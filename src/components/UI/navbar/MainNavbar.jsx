import React from 'react'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
    return (
        <nav className="navbar">
            <a className="navbar__element" href='/'>Курсы</a>
            <a className="navbar__element" href='/mentors'>Преподаватели</a>
            <a className="navbar__element" href='/about'>О нас</a>
            {/* <Link className="navbar__element" to='/'>Курсы</Link>
            <Link className="navbar__element" to='/mentors'>Преподаватели</Link>
            <Link className="navbar__element" to='/about'>О нас</Link> */}
        </nav>
    )
}

export default MainNavbar
