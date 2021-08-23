import React from 'react'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar__element" to='/courses'>Курсы</Link>
            <Link className="navbar__element" to='/mentors'>Преподаватели</Link>
            <Link className="navbar__element" to='/about'>О нас</Link>
        </nav>
    )
}

export default MainNavbar
