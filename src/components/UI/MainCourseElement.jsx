import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiService from '../../API/ApiService';
import CourseButton from './buttons/CourseButton';

const MainCourseElement = ({ index, course }) => {
    const [mentor, setMentor] = useState(null)
    const history = useHistory()

    const showMentor = async () => setMentor(await ApiService.fetchMentor(course.mentor))

    return (
        <div>
            <h3>
                {index}. Название: {course.title}
            </h3>
            <p>
                <strong>Крaткое описание:</strong> {course.short_description}
            </p>
            {
                mentor && (
                    <p>
                        <strong>Преподаватель:</strong> {mentor.fullname}
                    </p>
                )
            }
            <CourseButton onClick={() => history.push(`courses/${course.id}`)}>Открыть</CourseButton>
            <CourseButton onClick={showMentor}>Кто преподаватель?</CourseButton>
        </div>
    )
}

export default MainCourseElement