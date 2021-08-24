import axios from 'axios'

import configData from "../config.json";

export const axiosInstance = axios.create({
    baseURL: configData['API-JWT'],
    timeout: configData.TIMEOUT,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});