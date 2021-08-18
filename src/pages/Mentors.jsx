import React, { useEffect, useState } from 'react'

const Mentors = () => {
    const [mentors, setMentors] = useState(null)

    // useEffect(async () => setMentors(await ApiService.fetchMentors()), [])

    return (
        <div>
            <h1>Mentors</h1>
            <hr />
        </div>
    )
}

export default Mentors