import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiService from '../../API/ApiService';
import MainButton from './buttons/MainButton';

const MainCourseElement = ({ index, course, student, is_subscribed }) => {
    const [mentor, setMentor] = useState(null)
    const history = useHistory()

    const showMentor = async () => setMentor(await ApiService.fetchMentor(course.mentor))
    const subscribe = async () => await ApiService.subscribeStudent(course, student)
    const unsubscribe = async () => await ApiService.unsubscribeStudent(course, student)

    return (
        <div>
            <h4>{index}. Название: {course.title}</h4>
            <p><strong>Крaткое описание:</strong> {course.short_description}</p>
            {mentor && <p> <strong>Преподаватель:</strong> {mentor.fullname} </p>}
            <div className="course__buttons">
                {!student &&
                    <div>
                        <MainButton onClick={() => history.push(`courses/${course.id}`)}>
                            Открыть
                        </MainButton>
                        <MainButton onClick={showMentor}>Кто преподаватель?</MainButton>
                    </div>
                }
                <div className="div__space" />
                {student && is_subscribed &&
                    <button onClick={unsubscribe} className="unsubscribeButton">
                        Отписаться
                    </button>
                }
                {student && !is_subscribed &&
                    <button onClick={subscribe} className="subscribeButton">
                        Подписаться
                    </button>
                }
            </div>
        </div>
    )
}

export default MainCourseElement