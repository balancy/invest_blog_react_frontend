import React from 'react'
import StudentCourseElement from '../../UI/StudentCourseElement'

const UnsubscribedCourseElement = ({ allCourses, user, setCoursesNumber }) => {
    return (
        <div className="div_account_courses">
            {
                Object.values(allCourses).filter(course =>
                    !course.students.includes(user.student.id)
                ).map((course, index) => (
                    <div key={index}>
                        <StudentCourseElement
                            index={index + 1}
                            course={course}
                            courses_id={
                                Object.values(allCourses).filter(course =>
                                    course.students.includes(user.student.id)
                                ).map(course => course.id)
                            }
                            student_id={user.student.id}
                            is_subscribed={false}
                            setCoursesNumber={setCoursesNumber}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default UnsubscribedCourseElement
