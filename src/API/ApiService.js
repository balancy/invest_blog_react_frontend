import configData from "../config.json";

export default class ApiService {
    static async fetchCourses() {
        const coursesUrl = configData.HOST + configData.COURSES_RELATIVE_URL
        const response = await fetch(coursesUrl);
        return await response.json();
    }

    static async fetchMentor(url) {
        const response = await fetch(url);
        return await response.json();
    }
}
