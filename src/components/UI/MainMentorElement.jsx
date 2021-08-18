import React, { useState } from 'react';

const MainMentorElement = ({ index, mentor }) => {
    return (
        <div>
            <h3>
                {index}. Имя: {mentor.status}
            </h3>
            <p>
                Биография: {mentor.bio}
            </p>
        </div>
    )
}

export default MainMentorElement