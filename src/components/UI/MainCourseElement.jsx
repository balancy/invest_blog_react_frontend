import React, { useState } from 'react';
import OpenCourseButton from './buttons/OpenCourseButton';
import ApiService from '../../API/ApiService'

const MainCourseElement = ({ index, course }) => {
    const [mentor, setMentor] = useState(null)

    const showMentor = async () => setMentor((await ApiService.fetchMentor(course.mentor)).status)

    return (
        <div>
            <h3>
                {index}. Название: {course.title}
            </h3>
            <p>
                Описание: {course.description}
            </p>
            {
                mentor && (
                    <p>
                        Преподаватель: {mentor}
                    </p>
                )
            }
            <OpenCourseButton onClick={showMentor}>Кто ведет курс?</OpenCourseButton>
        </div>
    )
}

export default MainCourseElement