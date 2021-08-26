import React from 'react'

const SubscribeButton = ({ children, ...props }) => {
    return (
        <button {...props} className="SubscribeButton">
            {children}
        </button>
    )
}

export default SubscribeButton
