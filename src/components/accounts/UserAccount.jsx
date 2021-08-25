import React, { useEffect, useState } from 'react'
import ApiService from '../../API/ApiService'
import MainCourseElement from '../UI/MainCourseElement'

const UserAccount = ({ user }) => {
    const [courses, setCourses] = useState({})

    useEffect(() => {
        async function fetchData() {
            setCourses(await ApiService.fetchCourses())
        }
        fetchData();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <p>Добро пожаловать, <strong>{user.student.fullname}</strong></p>
            <hr />
            {courses &&
                <div>
                    <h3>Вы записаны на курсы:</h3>
                    <div className="div_account_courses">
                        {Object.values(courses).filter(
                            course => course.students.includes(user.student.id)
                        ).map((course, index) => (
                            <div key={index}>
                                <MainCourseElement
                                    index={index + 1}
                                    course={course}
                                    student={user.student}
                                    is_subscribed={true}
                                />
                            </div>
                        ))}
                    </div>
                    <hr />
                    <h3>Вы можете записаться на курсы:</h3>
                    <div className="div_account_courses">
                        {Object.values(courses).filter(
                            course => !course.students.includes(user.student.id)
                        ).map((course, index) => (
                            <div key={index}>
                                <MainCourseElement
                                    index={index + 1}
                                    course={course}
                                    student={user.student}
                                    is_subscribed={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default UserAccount
