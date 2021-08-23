import React, { useState } from 'react';

const MainMentorElement = ({ index, mentor }) => {
    return (
        <div>
            <h3>
                {index}. Имя: {mentor.fullname}
            </h3>
            <p>
                <strong>Статус:</strong> {mentor.status}
            </p>
            <p>
                <strong>Биография:</strong> {mentor.bio}
            </p>
        </div>
    )
}

export default MainMentorElement