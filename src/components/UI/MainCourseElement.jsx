import React from 'react';

const MainCourseElement = ({index, course}) => {
    return (
        <div>
            <h3>
                {index}. Название: {course.title}
            </h3>
            <p>
                Описание: {course.description}
            </p>
        </div>
    )
}

export default MainCourseElement