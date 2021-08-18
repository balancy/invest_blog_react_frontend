import React, { useState } from 'react';
import OpenCourseButton from './buttons/OpenCourseButton';

const MainCourseElement = ({ index, course }) => {
    const [mentor, setMentor] = useState(null)

    const showMentor = async () => {
        const response = await fetch(course.mentor);
        const data = await response.json();

        setMentor(data.status);
    }

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