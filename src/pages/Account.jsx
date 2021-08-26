import React, { useEffect, useState } from 'react'
import ApiService from '../API/ApiService'
import MentorAccount from '../components/accounts/MentorAccount'
import UserAccount from '../components/accounts/UserAccount/UserAccount'

const Account = () => {
    const [user, setUser] = useState({})
    const username = localStorage.getItem('username')

    useEffect(() => {
        async function fetchData() {
            setUser(await ApiService.fetchUser(username))
        }
        fetchData();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {
                user.mentor
                    ? <MentorAccount user={user}/>
                    : user.student && <UserAccount user={user}/>
            }
        </div>
    )
}

export default Account