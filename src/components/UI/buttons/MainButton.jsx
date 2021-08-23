import React from 'react'

const MainButton = ({ children, ...props }) => {
    return (
        <button {...props} className="MainButton">
            {children}
        </button>
    )
}

export default MainButton
