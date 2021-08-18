import React from 'react'

const OpenCourseButton = ({ children, ...props }) => {
    return (
        <button {...props} className="openCourseButton">
            {children}
        </button>
    )
}

export default OpenCourseButton
