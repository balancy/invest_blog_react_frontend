import axios from "axios";
import configData from "../config.json";

export default class ApiService {

    // Fetching data

    static async fetchCourses() {
        const coursesUrl = configData.API +
            configData.COURSES_RELATIVE_URL;

        const response = await fetch(coursesUrl);
        return await response.json();
    }


    static async fetchMentors() {
        const mentorsUrl = configData.API +
            configData.MENTORS_RELATIVE_URL;

        const response = await fetch(mentorsUrl);
        return await response.json();
    }


    static async fetchCourse(id) {
        const courseUrl = configData.API +
            configData.COURSES_RELATIVE_URL +
            id + '/';

        const response = await fetch(courseUrl);
        return await response.json();
    }


    static async fetchMentor(id) {
        const mentorUrl = configData.API +
            configData.MENTORS_RELATIVE_URL +
            id + '/';

        const response = await fetch(mentorUrl);
        return await response.json();
    }


    static async fetchUser(username) {
        const userUrl = configData.API +
            configData.USERS_RELATIVE_URL +
            username + '/';

        const response = await fetch(userUrl)
        return await response.json()
    }

    // Handling Tokens

    static obtainToken(username, password, setIsAuth) {
        axios.post(
            configData['API-JWT'] + 'token/',
            { username: username, password: password }
        ).then(response => {
            const access_token = response.data.access
            localStorage.setItem('username', username)
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('refresh_token', response.data.refresh)
            setIsAuth(true)
        }).catch(error => alert('Неверный логин или пароль'))
    }


    static refreshToken() {
        axios.post(
            configData['API-JWT'] + 'token/refresh/',
            { "refresh": localStorage.getItem('refresh_token') }
        ).then(response => {
            const access_token = response.data.access
            localStorage.setItem('access_token', access_token)
        }).catch(error => alert('Неверный токен'))
        alert("Токен обновлен")
    }

    // Handling students subscriptions

    static async subscribeStudent(
        courses_id, course_id, student_id, setCoursesNumber
    ) {
        const url = configData.API +
            configData.STUDENTS_RELATIVE_URL +
            student_id + '/';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }

        // console.log("course id ", course_id)
        // console.log("courses_id are ", courses_id)
        const data = {
            "courses": [course_id].concat(courses_id)
        }

        await axios.put(url, data, { headers })
            .then(response => {
                console.log("courses id are ", courses_id)
                console.log("course_id ", course_id)
                console.log("data ", data)
                setCoursesNumber(response.data.courses.length)
            }).catch(error =>
                error.response.status === 403 && alert("Обновите токен"))
            .catch(error => alert("Что-то пошло не так"))
    }


    static async unsubscribeStudent(
        courses_id, course_id, student_id, setCoursesNumber
    ) {
        const url = configData.API +
            configData.STUDENTS_RELATIVE_URL +
            student_id + '/';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }

        const data = {
            "courses": courses_id.filter(id => id !== course_id),
        }

        await axios.put(url, data, { headers })
            .then(response => {
                console.log("courses id are ", courses_id)
                console.log("course_id ", course_id)
                console.log("data ", data)
                setCoursesNumber(response.data.courses.length)
            }).catch(error =>
                error.response.status === 403 && alert("Обновите токен"))
            .catch(error => alert("Что-то пошло не так"))
    }
}
