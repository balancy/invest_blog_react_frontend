import React, { useContext, useState } from 'react'
import { axiosInstance } from '../API/AxiosApi'
import MainButton from '../components/UI/buttons/MainButton'
import MainInput from '../components/UI/input/MainInput'
import { AuthContext } from '../context'

const Login = () => {
    const [username, setUsername] = useState('Введите логин')
    const handleUsernameChange = (e) => setUsername(e.target.value)

    const [password, setPassword] = useState('Введите пароль')
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const { setIsAuth } = useContext(AuthContext)

    const login = event => {
        event.preventDefault()

        axiosInstance.post(
            '/token/', { username: username, password: password }
        ).then(response => {
            const access_token = response.data.access
            axiosInstance.defaults.headers['Authorization'] = "JWT" + access_token
            localStorage.setItem('username', username)
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('refresh_token', response.data.refresh)
            setIsAuth(true)
        }).catch(error => alert('Неверный логин или пароль'))
    }

    return (
        <div>
            <h1>Вход в аккаунт</h1>
            <hr />
            <form onSubmit={login}>
                <MainInput type="text" placeholder={username} onChange={handleUsernameChange} />
                <MainInput type="password" placeholder={password} onChange={handlePasswordChange} />
                <MainButton type="submit">Войти</MainButton>
            </form>
        </div>
    )
}

export default Login
