import React, { useEffect, useState } from 'react'
import ApiService from '../API/ApiService'
import MainCourseElement from '../components/UI/MainCourseElement'

const Courses = () => {
    const [courses, setCourses] = useState(null)

    useEffect(async () => setCourses(await ApiService.fetchCourses()), [])

    return (
        <div>
            <h1>Курсы</h1>
            <hr />
            {courses && (
                <div className="courses">
                    {courses.map((course, index) => (
                        <div key={index}>
                            <MainCourseElement index={index + 1} course={course} />
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Courses
