import React from 'react'

const CourseButton = ({ children, ...props }) => {
    return (
        <button {...props} className="CourseButton">
            {children}
        </button>
    )
}

export default CourseButton
