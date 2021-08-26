import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiService from '../../API/ApiService';
import MainButton from './buttons/MainButton';

const MainCourseElement = ({
    index, course
}) => {

    const [mentor, setMentor] = useState(null)
    const history = useHistory()

    return (
        <div>
            <h4>{index}. Название: {course.title}</h4>
            <p><strong>Крaткое описание:</strong> {course.short_description}</p>
            {mentor && <p> <strong>Преподаватель:</strong> {mentor.fullname} </p>}
            <div className="course__buttons">
                <div>
                    <MainButton onClick={() => history.push(`courses/${course.id}`)}>
                        Открыть
                    </MainButton>
                    <MainButton onClick={async () =>
                        setMentor(await ApiService.fetchMentor(course.mentor))}
                    >
                        Кто преподаватель?
                    </MainButton>
                </div>
            </div>
        </div>
    )
}

export default MainCourseElement