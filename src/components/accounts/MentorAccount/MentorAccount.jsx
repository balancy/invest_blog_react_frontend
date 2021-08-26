import React, { useEffect, useState } from 'react'
import ApiService from '../../../API/ApiService'
import AddNewCourse from '../../AddNewCourse'
import MainButton from '../../UI/buttons/MainButton'
import MentorCourseElement from '../../UI/MentorCourseElement'


const MentorAccount = ({ user }) => {
    const [courses, setCourses] = useState(null)
    const [addedCourse, setAddedCourse] = useState(null)
    const [deletedCourse, setDeletedCourse] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setCourses(await ApiService.fetchCourses())
        }
        fetchData();
    }, [addedCourse, deletedCourse])

    return (
        <div>
            <h3>Добро пожаловать, <strong>{user.mentor.fullname}</strong></h3>
            <hr />
            <h3>Все курсы</h3>
            {courses && courses.map((course, index) => (
                <div key={index}>
                    <MentorCourseElement index={index + 1} course={course} setDeletedCourse={setDeletedCourse}/>
                </div>
            ))}
            <hr />
            <h3>Добавить курс</h3>
            <AddNewCourse setAddedCourse={setAddedCourse}/>
            <hr />
            <h3>Токены</h3>
            <MainButton onClick={() => ApiService.refreshToken()}>
                Обновить токен
            </MainButton>
        </div>
    )
}

export default MentorAccount
