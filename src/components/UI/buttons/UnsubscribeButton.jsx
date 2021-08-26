import React from 'react'

const UnsubscribeButton = ({ children, ...props }) => {
    return (
        <button {...props} className="UnsubscribeButton">
            {children}
        </button>
    )
}

export default UnsubscribeButton
