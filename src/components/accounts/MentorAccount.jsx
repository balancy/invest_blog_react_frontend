import React from 'react'

const MentorAccount = ({user}) => {
    return (
        <div>
            <h3>Добро пожаловать, {user.mentor.fullname }</h3>
            <hr />
            {
                user.is_superuser &&
                    <p>У вас есть суперправа</p>
            }
        </div>
    )
}

export default MentorAccount
