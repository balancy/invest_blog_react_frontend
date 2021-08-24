import React, { useEffect, useState } from 'react'
import ApiService from '../API/ApiService'
import MainCourseElement from '../components/UI/MainCourseElement'

const Account = () => {
    const [user, setUser] = useState({})
    const username = localStorage.getItem('username')

    useEffect(() => {
        async function fetchData() {
            setUser(await ApiService.fetchDataForUser(username))
        }
        fetchData();
    }, [])

    // debug
    if (user) console.log(user)

    return (
        <div>
            <h1>Личный кабинет</h1>
            <hr />
            <div><h3>Добро пожаловать, {
                user.mentor
                    ? user.mentor.fullname
                    : user.student && user.student.fullname
            }</h3></div>
            {user.student &&
                <div>
                    <h3>Вы записаны на курсы:</h3>
                    {user.student.courses && (
                        <div>
                            {user.student.courses.map((course, index) => (
                                <div key={index}>
                                    <MainCourseElement index={index + 1} course={course} />
                                    <hr />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default Account