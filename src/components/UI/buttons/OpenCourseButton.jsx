import React from 'react'
import classes from './OpenCourseButton.module.css'

const OpenCourseButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.openCourseButton}>
            {children}
        </button>
    )
}

export default OpenCourseButton
