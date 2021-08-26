import React from 'react';
import ApiService from '../../API/ApiService';
import UnsubscribeButton from './buttons/UnsubscribeButton';

const MentorCourseElement = ({
    index, course, setDeletedCourse
}) => {

    return (
        <div className="div_account_courses">
            <h4>{index}. Название: {course.title}</h4>
            <p><strong>Крaткое описание:</strong> {course.short_description}</p>
            <div className="course__buttons">
                <div className="div__space"></div>
                <UnsubscribeButton
                    onClick={async () =>
                        await ApiService.deleteCourse(course.id, setDeletedCourse)}>
                    Удалить
                </UnsubscribeButton>
            </div>
        </div>
    )
}

export default MentorCourseElement