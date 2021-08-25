import configData from "../config.json";

export default class ApiService {
    static async fetchCourses() {
        const coursesUrl = configData.API + configData.COURSES_RELATIVE_URL
        const response = await fetch(coursesUrl);
        return await response.json();
    }

    static async fetchMentors() {
        const mentorsUrl = configData.API + configData.MENTORS_RELATIVE_URL
        const response = await fetch(mentorsUrl);
        return await response.json();
    }

    static async fetchCourse(id) {
        const courseUrl = configData.API + configData.COURSES_RELATIVE_URL + id + '/'
        const response = await fetch(courseUrl);
        return await response.json();
    }

    static async fetchMentor(id) {
        const mentorUrl = configData.API + configData.MENTORS_RELATIVE_URL + id + '/'
        const response = await fetch(mentorUrl);
        return await response.json();
    }

    static async fetchUser(username) {
        const userUrl = configData.API + configData.USERS_RELATIVE_URL + username + '/'
        const response = await fetch(userUrl)
        return await response.json()
    }
}
