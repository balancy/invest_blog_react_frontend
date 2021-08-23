import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiService from '../../API/ApiService';
import MainButton from './buttons/MainButton';

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
            <MainButton onClick={() => history.push(`courses/${course.id}`)}>Открыть</MainButton>
            <MainButton onClick={showMentor}>Кто преподаватель?</MainButton>
        </div>
    )
}

export default MainCourseElement