import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        user: 'STAFF',
    },
    withCredentials: true,
});

export const uploadInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'multipart/form-data',
        user: 'STAFF',
    },
    withCredentials: true,
});

export default axiosInstance;
