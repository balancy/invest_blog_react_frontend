import React, { useEffect, useState } from 'react'
import ApiService from '../API/ApiService'
import MainMentorElement from '../components/UI/MainMentorElement'

const Mentors = () => {
    const [mentors, setMentors] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setMentors(await ApiService.fetchMentors())
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Mentors</h1>
            <hr />
            {mentors && (
                <div>
                    {mentors.map((mentor, index) => (
                        <div key={index}>
                            <MainMentorElement index={index + 1} mentor={mentor} />
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Mentors