import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MainButton from '../buttons/MainButton'

const MainNavbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('isAuth')
    }

    return (
        <div>
            <nav className="navbar">
                <Link className="navbar__element" to='/courses'>Курсы</Link>
                <Link className="navbar__element" to='/mentors'>Преподаватели</Link>
                <Link className="navbar__element" to='/about'>О нас</Link>
                {
                    isAuth &&
                    <MainButton onClick={logout}>Выйти</MainButton>
                }
            </nav>
        </div>
    )
}

export default MainNavbar
