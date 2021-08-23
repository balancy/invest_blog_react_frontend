import React, { useContext } from 'react'
import MainButton from '../components/UI/buttons/MainButton'
import MainInput from '../components/UI/input/MainInput'
import { AuthContext } from '../context'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('isAuth', true)
    }

    return (
        <div>
            <h1>Войти в аккаунт</h1>
            <hr />
            <form onSubmit={login}>
                <MainInput type="text" placeholder="Введите логин"/>
                <MainInput type="password" placeholder="Введите пароль"/>
                <MainButton>Войти</MainButton>
            </form>
        </div>
    )
}

export default Login
