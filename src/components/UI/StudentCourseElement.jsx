import React from 'react';
import ApiService from '../../API/ApiService';
import SubscribeButton from './buttons/SubscribeButton';
import UnsubscribeButton from './buttons/UnsubscribeButton';

const StudentCourseElement = ({
    index, course, courses_id, student_id, is_subscribed, setCoursesNumber
}) => {

    return (
        <div>
            <h4>{index}. Название: {course.title}</h4>
            <p><strong>Крaткое описание:</strong> {course.short_description}</p>
            <div className="course__buttons">
                <div className="div__space" />
                {is_subscribed &&
                    <UnsubscribeButton
                        onClick={async () =>
                            await ApiService.unsubscribeStudent(
                                courses_id, course.id, student_id, setCoursesNumber
                            )
                        }>
                        Отписаться
                    </UnsubscribeButton>
                }
                {!is_subscribed &&
                    <SubscribeButton
                        onClick={async () =>
                            await ApiService.subscribeStudent(
                                courses_id, course.id, student_id, setCoursesNumber
                            )}>
                        Подписаться
                    </SubscribeButton>
                }
            </div>
        </div>
    )
}

export default StudentCourseElement