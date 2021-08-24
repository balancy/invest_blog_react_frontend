import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MainButton from '../buttons/MainButton'

const MainNavbar = () => {
    const history = useHistory()
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('username')
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }

    return (
        <div>
            <nav className="navbar">
                <Link className="navbar__element" to='/courses'>Курсы</Link>
                <Link className="navbar__element" to='/mentors'>Преподаватели</Link>
                <Link className="navbar__element" to='/about'>О нас</Link>
                {
                    isAuth &&
                    <Link className="navbar__element" to="/account">Личный кабинет</Link>
                }
                <div className="navbar__space"></div>
                {
                    isAuth
                      ?
                      <MainButton onClick={logout}>Выйти</MainButton>
                      :
                      <MainButton onClick={() => history.push(`login/`)}>Войти</MainButton>
                }
            </nav>
        </div>
    )
}

export default MainNavbar
