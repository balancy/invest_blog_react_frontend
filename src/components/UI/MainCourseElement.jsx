import React, { useState } from 'react';
import CourseButton from './buttons/CourseButton';
import ApiService from '../../API/ApiService'

const MainCourseElement = ({ index, course }) => {
    const [mentor, setMentor] = useState(null)
    const [details, setDetails] = useState(null)

    const showMentor = async () => setMentor(await ApiService.fetchMentor(course.mentor))
    const showDetails = async () => setDetails(await ApiService.fetchCourse(course.id))

    return (
        <div>
            <h3>
                {index}. Название: {course.title}
            </h3>
            <p>
                <strong>Крaткое описание:</strong> {course.short_description}
            </p>
            {
                details && (
                    <p>
                       <strong>Полное описание:</strong> {details.full_description}
                    </p>
                )
            }
            {
                mentor && (
                    <p>
                        <strong>Преподаватель:</strong> {mentor.fullname}
                    </p>
                )
            }
            <CourseButton onClick={showDetails}>Полное описание</CourseButton>
            <CourseButton onClick={showMentor}>Кто преподаватель?</CourseButton>
        </div>
    )
}

export default MainCourseElement