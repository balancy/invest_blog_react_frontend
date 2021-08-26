import React, { useEffect, useState } from 'react'
import ApiService from '../../../API/ApiService'
import MainButton from '../../UI/buttons/MainButton'
import SubscribedCourses from './SubscribedCourses'
import UnsubscribedCourses from './UnsubscribedCourses'

const UserAccount = ({ user }) => {
    const [courses, setCourses] = useState({})
    const [actualCoursesNumber, setActualCoursesNumber] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setCourses(await ApiService.fetchCourses())
        }
        fetchData();
    }, [actualCoursesNumber]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <p>Добро пожаловать, <strong>{user.student.fullname}</strong></p>
            <hr />
            {courses &&
                <div>
                    <h3>Вы записаны на курсы:</h3>
                    <SubscribedCourses
                        allCourses={courses}
                        user={user}
                        setCoursesNumber={setActualCoursesNumber}
                    />
                    <hr />
                    <h3>Вы можете записаться на курсы:</h3>
                    <UnsubscribedCourses
                        allCourses={courses}
                        user={user}
                        setCoursesNumber={setActualCoursesNumber}
                    />
                   <hr />
                </div>
            }
            <h3>Токены:</h3>
            <MainButton onClick={() => ApiService.refreshToken()}>
                Обновить токен
            </MainButton>
        </div >
    )
}

export default UserAccount
